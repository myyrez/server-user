const userService = require('../services/user.service')

exports.findAll = async (req, res) => {
    try {
        const users = await userService.findAll()

        return res.status(200).json({
            status: 200,
            data: users,
            message: 'usuários listados com sucesso'
        })
    } catch (error) {
        res.send(400).json({
            status: 400,
            message: error
        })
    }
}
exports.findById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const user = await userService.findById(id)

        res.status(200).json({
            status: 200,
            data: user, 
            message: 'usuário selecionado'
        })
    } catch (error) {
        res.send(400).json({
            status: 400,
            message: error
        })
    }
}
exports.create = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await userService.create(username, email, password)

        res.status(201).send({
            message: 'usuário',
            body: {
                user: user
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: `erro: ${error.message}`
        })
    }
}
exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { username, email, password } = req.body

        await userService.update(id, username, email, password)
        res.status(200).send({
            message: 'usuário alterado',
            body: {
                username: username,
                email: email
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}
exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        await userService.delete(id)
        res.status(200).send({
            message: 'usuário deletado'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}