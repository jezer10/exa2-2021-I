
const router = require('express').Router()

const matriculaController= require('../../controller/matriculaController')

router.get('/:id',matriculaController.getMatricula)
router.get('/',matriculaController.getMatriculas)
router.post('/',matriculaController.createMatricula)
router.put('/:id',matriculaController.updateMatricula)
router.delete('/:id',matriculaController.deleteMatricula)

module.exports=router