import express from "express";
import MemberController from "../controllers/member.controller.js";

const memberRouter = express.Router()

// GET todas las jugadoras (con filtro opcional: ?category=Juvenil)
memberRouter.get('/', MemberController.getAll)

// POST crear nueva jugadora
memberRouter.post('/', MemberController.create)

export default memberRouter