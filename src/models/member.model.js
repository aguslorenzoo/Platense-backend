import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        dni: {
            type: Number,
            required: true
        },
        birth_date: {
            type: Date,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        club: {
            type: String,
            required: true
        },
        contact_name: {
            type: String,
            required: true
        },
        contact_phone: {
            type: Number,
            required: true
        }
    }
)
const Member = mongoose.model('Member', memberSchema)
export default Member