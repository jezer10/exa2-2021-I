const router = require('express').Router();


const { createUser } = require('../../controller/userController');

const passport = require('passport');
require('../../utils/auth/jwt')


router.post('/', passport.authenticate("jwt", { session: false }), createUser)

module.exports = router