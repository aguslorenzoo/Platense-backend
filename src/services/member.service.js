import MemberRepository from "../repositories/member.repository.js";

class MemberService {
    static async create (name, last_name, dni, birth_date, category, club, contact_name, contact_phone) {
        try {
            return await MemberRepository.create(
                name, last_name, dni, birth_date, category, club, contact_name, contact_phone
            )
        } catch (error) {
            console.error('[SERVICE ERROR]: Error al crear jugadora', error);
            throw error
        }
    }

    static async getAll(category = null) {
        try {
            return await MemberRepository.getAll(category)
        } catch (error) {
            console.error('[SERVICE ERROR]: Error al obtener jugadoras', error);
            throw error;
        }
    }

    static async deleteById(member_id){
        try{
            return await MemberRepository.deleteById(member_id)
        }
        catch(error){
            console.error('[SERVICE ERROR]: Error al eliminar jugadoras', error)
            throw error
        }
    }
}

export default MemberService

