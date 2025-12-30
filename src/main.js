import express from 'express'
import cors from 'cors'
import ENVIRONMENT from "./config/environment.config.js";
import connectToMongoDB from './config/MongoDB.config.js';
import memberRouter from './routes/member.router.js';

connectToMongoDB()

const app = express()

app.use( cors() )
app.use(express.json())

app.use('/api/members', memberRouter)


app.listen(
    ENVIRONMENT.PORT || 8080,
    () => {
        console.log(`Tu servidor se esta ejecutando correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)
