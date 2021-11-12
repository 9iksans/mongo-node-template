import express from 'express'
import { verify as requiresAuth } from '../config/jwt.config.js'
import * as productController from '../controllers/product.controller.js'
const router = express.Router()

router.get("/", requiresAuth, productController.findAll)
router.get("/:id", requiresAuth, productController.findOne)
router.post("/", requiresAuth, productController.create)
router.put("/:id", requiresAuth, productController.updateOne)
router.delete("/:id", requiresAuth, productController.deleteOne)

export default router

