import express from "express";
import productRouter from "./src/routes/product.route.js"
import userRouter from "./src/routes/user.route.js"
import DbConnection from "./src/config/db.config.js"

const port = process.env.PORT || 2020
const app = express()
const mongo = new DbConnection()

mongo.mongoConnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/products", productRouter)
app.use('/api/users', userRouter)

app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        status: error.status,
        message: error.message
    })
})

app.listen(port, () => {
    console.log("app si running on port : " + port)
})