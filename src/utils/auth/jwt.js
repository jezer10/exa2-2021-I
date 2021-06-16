const passport = require("passport");

const { Strategy, ExtractJwt } = require("passport-jwt")

const boom = require('@hapi/boom')

const UsersService = require('../../services/userService')

const userService = new UsersService

passport.use(
    new Strategy({
        secretOrKey: process.env.JWT_TOKEN_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (tokenPayload, next) => {
        try {
            console.log(tokenPayload)
            const user = await userService.getUserByUsername(tokenPayload.sub)
            console.log(user)
            if (!user) {
                return next(boom.unauthorized(), false)
            }
            return next(null, user)

        } catch (error) {
            return next(error)
        }

    })
)