const bcrypt = require('bcrypt')

const saltRounds = 10

const hashing = (senha) => {
    const salt = bcrypt.genSaltSync(saltRounds)

    return bcrypt.hashSync(senha, salt)
}

module.exports = hashing