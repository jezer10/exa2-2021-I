const p = require('../database')
const { comparePassword, encryptPassword } = require('../utils/encrypt')
class UserService {
    constructor() { }
    async createUser(user) {
        try {
            const { idpersona, username, password, idrole } = user
            const encryptedPassword = await encryptPassword(password)
            const response = await p.query('insert into users (idpersona,username,password,idrole) values ($1,$2,$3,$4)', [idpersona, username, encryptedPassword, idrole])
            console.log(response)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
    async hasUser({ username, password }) {
        const response = await p.query('select * from users where username=$1', [username])
        const [user] = response.rows
        if (!user) {
            return false
        }
        const equalPassword = await comparePassword(password, user.password);
        return equalPassword;
    }
    async getUserByUsername(username) {
        try {
            const res = await p.query('select * from users where username=$1', [username])
            if (res.rows.length === 1) {
                return res.rows[0]
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserService