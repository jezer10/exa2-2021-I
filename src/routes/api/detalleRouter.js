const router = require('express').Router();

const detalleController= require('../../controller/detalleController')



router.get('/:id',detalleController.getDetalle)
router.get('/',detalleController.getDetalles)
router.post('/',detalleController.createDetalle)
router.delete('/:id',detalleController.deleteDetalle)
router.put('/:id',detalleController.updateDetalle)
module.exports = router