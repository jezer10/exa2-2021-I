const router = require('express').Router();
const detalleController = require('../../controller/detalleController')
const passport = require('passport');

require('../../utils/auth/jwt')

router.get('/reporte/:id', passport.authenticate("jwt", { session: false }), detalleController.getDetalleMatricula)
router.get('/:id', passport.authenticate("jwt", { session: false }), detalleController.getDetalle)
router.get('/', passport.authenticate("jwt", { session: false }), detalleController.getDetalles)
router.post('/', passport.authenticate("jwt", { session: false }), detalleController.createDetalle)
router.delete('/:id', passport.authenticate("jwt", { session: false }), detalleController.deleteDetalle)
router.put('/:id', passport.authenticate("jwt", { session: false }), detalleController.updateDetalle)

module.exports = router