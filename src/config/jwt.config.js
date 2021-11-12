import jwt from 'jsonwebtoken'
const jwtsecret = process.env.JWT_SECRET_KEY


export const verify = async (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization']
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            const verfied = jwt.verify(bearerToken, jwtsecret)
            req.user = verfied
            next()
        } else {
            res.status(401).json({
                status: 401,
                message: "Access denied"
            })
        }
    } catch (error) {
        res.status(401).json({
            status: 401,
            message: "Access denied"
        })
    }
}