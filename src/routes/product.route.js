import express from 'express'
import * as productController from '../controllers/product.controller.js'
const router = express.Router()

router.get("/", productController.findAll)
router.get("/:id",productController.findOne)
router.post("/", productController.create)
router.put("/:id",productController.updateOne)
router.delete("/:id",productController.deleteOne)

export default router

