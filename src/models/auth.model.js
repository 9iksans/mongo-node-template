import mongoose from 'mongoose'

const UserAuth = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model("users", UserAuth)
