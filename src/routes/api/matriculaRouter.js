const passport = require('passport')
const router = require('express').Router()

const matriculaController = require('../../controller/matriculaController')

require('../../utils/auth/jwt')

router.get('/:id', passport.authenticate("jwt", { session: false }), matriculaController.getMatricula)
router.get('/', passport.authenticate("jwt", { session: false }), matriculaController.getMatriculas)
router.post('/', passport.authenticate("jwt", { session: false }), matriculaController.createMatricula)
router.put('/:id', passport.authenticate("jwt", { session: false }), matriculaController.updateMatricula)
router.delete('/:id', passport.authenticate("jwt", { session: false }), matriculaController.deleteMatricula)

module.exports = router