import jwt from "jsonwebtoken"

// MIDDLEWARE FUNCTION TO DECODE JWT TOKEN TO GET CLERK ID
const authUser = (req, res, next) => {
    try {
        const { token } = req.headers

        if (!token) {
            return res.json({success: false, message: "Unauthorized, login again" })
        }
        const token_decode = jwt.decode(token)
        req.body.clerkId = token_decode.clerkId
        next()
    } catch (error) {
        console.error(error)
        res.json({success: false, message: error.message})
    }
}

export default authUser