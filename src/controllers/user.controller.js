import User from '../models/user.model.js'

export const findAll = async (req, res) => {
    try {
        const user = await User.find({})
        res.json({
            status: 200,
            message: user
        })
    } catch (error) {
        res.json({
            status: 200,
            message: error
        })
    }
}

export const findOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(404).json({
                status: 404,
                message: "Data not found"
            })
        }
        res.json({
            status: 200,
            message: user
        })
    } catch (error) {
        res.json({
            status: 200,
            message: error
        })
    }
}

export const create = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
    })
    try {
        const saveUser = await user.save()
        res.json({
            status: 200,
            message: saveUser
        })
    } catch (error) {
        res.json({
            status: 200,
            message: error
        })
    }
}

export const updateOne = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        if (!user) {
            res.status(404).json({
                status: 404,
                message: "Data not found"
            })
        }
        const saveUser = await User.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
        if (saveUser.modifiedCount == 0 || !saveUser.acknowledged) {
            res.status(403).json({
                status: 403,
                message: "Invalid Scheme / Nothing has Changeed"
            })
        }
        res.json({
            status: 200,
            message: await User.findOne({ _id: req.params.id })
        })
    } catch (error) {
        res.json({
            status: 200,
            message: error
        })
    }
}

export const deleteOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const deleteUser = await User.remove({ _id: req.params.id })
        res.json({
            status: 200,
            message: deleteUser
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}