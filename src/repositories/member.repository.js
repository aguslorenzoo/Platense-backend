import Member from "../models/member.model.js";


class MemberRepository {
    static async create (name, last_name, dni, birth_date, category, club, contact_name,contact_phone){
        try{
            return await Member.create({
                name: name,
                last_name: last_name,
                dni: dni,
                birth_date: birth_date,
                category: category,
                club: club,
                contact_name: contact_name,
                contact_phone: contact_phone
            })
        }
        catch(error){
            console.error('[SERVER ERROR]: No se pudo crear la jugadora.', error)
            throw error
        }
    }
    
    static async deleteById(member_id){
        try{
            const member_delete = await Member.findByIdAndDelete(member_id)
            return member_delete
        }
        catch(error){
            console.error('[REPOSITORY ERROR: No se pudo encontrar la jugadora a eliminar')
        }

    }


    static async getAll (category = null) {
        try {
            const filter = {};
            
            if (category && category !== 'Todas') {
                filter.category = category;
            }
            
            return await Member.find(filter).sort({ createdAt: -1 })
        } catch (error) {
            console.error('[REPOSITORY ERROR]: No se pudieron obtener las jugadoras.', error);
            throw error;
        }
    }

}

export default MemberRepository