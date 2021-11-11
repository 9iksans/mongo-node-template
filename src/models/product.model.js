import mongoose from 'mongoose'

const Product = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    detail : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

export default mongoose.model("products", Product)
