import express from 'express'
import { verify as requiresAuth } from '../config/jwt.config.js'
import * as userController from '../controllers/user.controller.js'

const router = express.Router()

router.get("/", requiresAuth, userController.findAll)
router.get("/:id", requiresAuth, userController.findOne)
router.post("/", requiresAuth, userController.create)
router.put("/:id", requiresAuth, userController.updateOne)
router.delete("/:id", requiresAuth, userController.deleteOne)

export default router