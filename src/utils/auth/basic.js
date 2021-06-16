const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const UsersService = require('../../services/userService')
const userService = new UsersService;
passport.use(
    new BasicStrategy(
        async (username, password, next) => {
            try {

                if(!(await userService.hasUser({username,password}))){
                    return next(boom.unauthorized,false)
                }

                return next(null,{username})


            } catch (error) {
                return next(error)
            }
        }
    )
)
