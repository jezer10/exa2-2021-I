const bcrypt = require('bcrypt')

const encrypt = {}

encrypt.encryptPassword = async (password) => {
    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        return encryptedPassword;
    } catch (error) {
        console.log(error)
    }
}

encrypt.comparePassword = async (password, encryptedPassword) => {
    try {
        const compared = await bcrypt.compare(password, encryptedPassword)
        return compared;
    } catch (error) {
        console.log(error)
    }

}

module.exports = encrypt