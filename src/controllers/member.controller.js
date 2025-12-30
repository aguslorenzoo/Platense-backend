import MemberService from "../services/member.service.js";

class MemberController {
    static async create(request, response) {
        try {
            const { 
                name, last_name, dni, birth_date, category, club, contact_name, contact_phone 
            } = request.body

            if (!name || !last_name || !dni || !birth_date || !category || !club || !contact_name || !contact_phone) {
                return response.status(400).json({
                    ok: false,
                    message: 'Todos los campos son requeridos',
                    status: 400
                })
            }

            const member = await MemberService.create(
                name, last_name, dni, birth_date, category, club, contact_name, contact_phone
            )

            response.status(201).json({
                ok: true,
                status: 201,
                message: 'Jugadora creada exitosamente',
                data: {
                    member: member
                }
            })
        }catch(error) {
            if (error.status) {
                return response.status(error.status).json({
                    ok: false,
                    message: error.message,
                    status: error.status
                });
            } else {
                console.error('ERROR AL CREAR JUGADORA', error);
                return response.status(500).json({
                    ok: false,
                    message: 'Error interno del servidor',
                    status: 500
                });
            }
        }
    }


    static async getAll(request, response) {
        try {
            const category = request.query.category || null;
            
            const members = await MemberService.getAll(category)

            response.status(200).json({
                ok: true,
                status: 200,
                message: 'Jugadoras obtenidas exitosamente',
                data: {
                    members: members,
                    count: members.length
                }
            })

        }
        catch(error) {
            if (error.status) {
                return response.status(error.status).json({
                    ok: false,
                    message: error.message,
                    status: error.status
                })
            } else {
                console.error('ERROR AL OBTENER JUGADORAS', error)
                return response.status(500).json({
                    ok: false,
                    message: 'Error interno del servidor',
                    status: 500
                })
            }
        }
    }
}
 
export default MemberController