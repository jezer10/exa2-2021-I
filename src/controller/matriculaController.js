const pg = require('../database');


const matriculaController = {}

matriculaController.getMatricula = async (req, res) => {
    try {
        const idmatricula = req.params.id;
        const response = await pg.query('select * from matricula where idmatricula=$1', [idmatricula])
        return res.status(200).send(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(200).send('Internal server error')

    }

}

matriculaController.getMatriculas = async (req, res) => {
    try {
        const response = await pg.query('select * from matricula');
        return res.status(200).send(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(200).send('Internal server error')

    }
}

matriculaController.createMatricula = async (req, res) => {
    try {
        const { fecha, iduser } = req.body
        const response = await pg.query('insert into matricula (fecha,iduser) values ($1,$2)', [fecha, iduser])
        return res.status(201).send(response.rowCount);
    } catch (error) {
        console.log(error)
        return res.status(200).send('Internal server error')

    }
}

matriculaController.updateMatricula = async (req, res) => {
    try {
        const { idmatricula, fecha, iduser } = req.body

        const response = await pg.query('update matricula set fecha=$2,iduser=$3 where idmatricula=$1', [idmatricula, fecha, iduser])

        return res.status(200).send(response.rowCount)
    } catch (error) {
        console.log(error);
        return res.status(200).send('Internal server error')

    }

}

matriculaController.deleteMatricula = async (req, res) => {

    try {
        const idmatricula = req.params.id

        const response = await pg.query('delete from matricula where idmatricula=$1', [idmatricula])

        res.status(200).send(response.rowCount)

    } catch (error) {
        console.log(error)
        return res.status(200).send('Internal server error')
    }



}

module.exports = matriculaController