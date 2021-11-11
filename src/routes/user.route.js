import express from 'express'
import * as userController from '../controllers/user.controller.js'

const router = express.Router()

router.get("/", userController.findAll)
router.get("/:id", userController.findOne)
router.post("/", userController.create)
router.put("/:id", userController.updateOne)
router.delete("/:id", userController.deleteOne)

export default router