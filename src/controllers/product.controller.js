import Product from "../models/product.model";

export const findAll = async (req, res) => {
    try {
        const product = await Product.find({})
        res.json({
            status: 200,
            message: product
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const findOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.json({
                status: 404,
                message: "Data not found!"
            })
        }
        res.json({
            status: 200,
            message: product
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const create = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        detail: req.body.detail,
        price: req.body.price
    })
    try {
        const saveProduct = await product.save()
        res.json({
            status: 200,
            message: saveProduct
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const updateOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const saveProduct = await Product.updateOne({_id : req.params.id }, {$set : req.body}, {new: true})
        if(!saveProduct.acknowledged){
            res.json({
                    status: 500,
                    message: "Invalid Scheme"
                })
        }
        res.json({
            status: 200,
            message: await Product.findById(req.params.id)
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const deleteOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const deleteProduct = await Product.remove({ _id: req.params.id })
        res.json({
            status: 200,
            message: deleteProduct
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}