const pg = require('../database');


const detalleController = {}

detalleController.getDetalleMatricula = async (req, res) => {
    try {
        const idmatricula = req.params.id
        const query = `select * from detalle d join matricula m on (d.idmatricula=m.idmatricula) 
        join curso c on (d.idcurso=c.idcurso) where m.idmatricula=$1`
        const response = await pg.query(query, [idmatricula])
        let horasTotales = 0;
        let creditosTotales = 0;
        let cursos = response.rows.map(c => {
            const { nombre, creditos, horas } = c
            horasTotales += horas;
            creditosTotales += creditos;
            const obj = { nombre, creditos, horas }
            return obj
        })
        const matricula = { cursos, horasTotales, creditosTotales }
        res.status(200).json(matricula)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal server error')
    }
}
detalleController.getDetalle = async (req, res) => {
    try {
        const iddetalle = req.params.id;
        const response = await pg.query('select * from detalle where iddetalle=$1', [iddetalle])
        return res.status(200).send(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal server error')
    }
}
detalleController.getDetalles = async (req, res) => {
    try {
        const response = await pg.query('select * from detalle');
        return res.status(200).send(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal server error');
    }
}
detalleController.createDetalle = async (req, res) => {
    try {
        const { creditos, horas, idmatricula } = req.body
        const response = await pg.query('insert into detalle (fecha,iduser) values ($1,$2)', [creditos, horas, idmatricula])
        return res.status(201).send(response.rowCount);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal server error')
    }
}
detalleController.updateDetalle = async (req, res) => {
    try {
        const { iddetalle, creditos, horas, idmatricula } = req.body
        const response = await pg.query('update detalle set creditos=$2,horas=$3,idmatricula=$4 where iddetalle=$1', [iddetalle, creditos, horas, idmatricula])
        return res.status(200).send(response.rowCount)
    } catch (error) {
        console.log(error);
        return res.status(200).send('Internal server error')
    }
}
detalleController.deleteDetalle = async (req, res) => {
    try {
        const iddetalle = req.params.id
        const response = await pg.query('delete from detalle where iddetalle=$1', [iddetalle])
        res.status(200).send(response.rowCount)
    } catch (error) {
        console.log(error)
        return res.status(200).send('Internal server error')
    }
}

module.exports = detalleController