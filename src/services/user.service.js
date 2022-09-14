const db= require('../models')
const User = db.users

exports.findAll = async () => {
    try {
        const users = await User.findAll({
            attributes:['id', 'username', 'email']
        })

        return users
    } catch (error) {
        throw Error(`ERRO: ${error.message}`)
    }
}
exports.findById = async id => {
    try {
        const user = await User.findByPk(id, {
            attributes:['id', 'username', 'email']
        })

        return user
    } catch (error) {
        throw Error(`ERRO: ${error.message}`)
    }
}
exports.create = async (username, email, password) => {
    try {
        const user = await User.create(
            {username: username, email: email, password: password},
        )

        return user
    } catch (error) {
        throw Error(`erro: ${error.message}`)
    }
}
exports.update = async (id, username, email, password) => {
    try {
        await User.update(
            {username: username, email: email, password: password},
            {where: {id: id}}
        )

    } catch (error) {
        throw Error(`erro: ${error.message}`)
    }
}
exports.delete = async id => {
    try {
        await User.destroy({
            where: {id: id}
        })
    } catch (error) {
        throw Error(`erro: ${error.message}`)
    }
}