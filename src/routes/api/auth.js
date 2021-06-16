const boom = require('@hapi/boom')
const passport = require('passport')
const jwt = require('jsonwebtoken');
const router = require('express').Router();
require('../../utils/auth/basic')

router.post('/token', async (req, res, next) => {
    passport.authenticate("basic", (error, user) => {
        try {
            if (error || !user) {
                next(boom.unauthorized());
            }
            console.log(user)
            req.login(user, { session: false }, async (error) => {
                if (error) {
                    next(error)
                }
                const payload = { sub: user.username }
                const token = jwt.sign(payload, process.env.JWT_TOKEN_SECRET, {
                    expiresIn: "15m"
                })
                return res.status(200).json({ "token": token });
            })
        } catch (error) {
            next(error)
        }
    })(req, res, next)
})

module.exports=router
