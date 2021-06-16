const UserService = require('../services/userService');

const userService = new UserService();

const userController = {}

userController.createUser = async (req, res) => {
    try {
        const { idpersona, username, password, idrole } = req.body
        const user = { idpersona, username, password, idrole }
        const response = await userService.createUser(user)
        console.log(response)
        return res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(erro.status || 500).send({ 'msg': 'Internal server error' })

    }
}

module.exports=userController