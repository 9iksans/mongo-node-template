import UserAuth from '../models/auth.model.js'
import jwt from 'jsonwebtoken'

const jwtsecret = process.env.JWT_SECRET_KEY

export const login = async (req, res) => {

    const auth = new UserAuth({
        username: req.body.username,
        password: req.body.password
    })

    const errorVal = auth.validateSync()
    if (errorVal) {
        return res.status(403).json({
            status: 403,
            message: 'Invalid Scheme'
        })
    }

    const authUsername = await UserAuth.findOne({ username: req.body.username })
    if (!authUsername) {
        return res.status(401).json({
            status: 401,
            message: 'Username not found'
        })
    }
    if (authUsername.username !== req.body.username || authUsername.password !== req.body.password) {
        return res.status(401).json({
            status: 401,
            message: 'Password is incorrect'
        })
    }
    const token = jwt.sign({ _id: authUsername._id }, jwtsecret, { expiresIn: '12h' })
    res.json({
        status: 200,
        message: {
            username: req.body.username,
            token: token
        }
    })
}