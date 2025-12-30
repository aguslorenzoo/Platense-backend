// MongoDB.config.js - VERSIÓN CORREGIDA
import mongoose from 'mongoose'
import ENVIRONMENT from './environment.config.js'

async function connectToMongoDB() {
    try {
        const connection_string = ENVIRONMENT.MONGO_DB_CONNECTION_STRING
        
        // VALIDAR QUE EXISTA EL STRING
        if (!connection_string) {
            throw new Error('MONGO_DB_CONNECTION_STRING no está definido')
        }
        
        console.log("Intentando conectar a MongoDB...")
        
        await mongoose.connect(connection_string, {
            serverSelectionTimeoutMS: 30000, // 30 segundos para seleccionar servidor
            socketTimeoutMS: 45000,         // 45 segundos para operaciones
            connectTimeoutMS: 30000,        // 30 segundos para conexión inicial
            maxPoolSize: 10,                // Número máximo de conexiones
            minPoolSize: 2,
            retryWrites: true,
            w: 'majority'
        })
        
        console.log("✅ Conexión con DB exitosa!")
        
        // Verificar conexión
        mongoose.connection.on('error', err => {
            console.error('[MONGO ERROR]:', err)
        })
        
        mongoose.connection.on('disconnected', () => {
            console.warn('[MONGO WARN]: Desconectado de MongoDB')
        })
        
    } catch(error) {
        console.error('[SERVER ERROR]: Fallo en la conexión a MongoDB')
        console.error('Detalles:', error.message)
        
        // No salir del proceso en producción
        if (process.env.NODE_ENV === 'production') {
            console.error('Modo producción: Continuando sin DB')
        } else {
            throw error // En desarrollo, muestra el error completo
        }
    }
}

export default connectToMongoDB