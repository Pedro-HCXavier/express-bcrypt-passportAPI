const express = require('express')
const router = express.Router()
const path = require('path')
const User = require('../db/models/User')

const hashing = require('../utils/hashing')


router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/views/registrar.html'))
})
router.post('/', async (req, res) => {
    
    // O body precisa de email e senha
    const { body } = req
    
    body.senha = hashing(body.senha)
    try {
        const newUser = new User(body)
        // console.log(newUser)
        const saveUser = await newUser.save()

        res.status(201).redirect('/login')
    } catch (err) {
        console.error(`Error : ${err}`)
        res.status(400).send('O email deve ser único, preencha o campo senha')
    }


})

module.exports = router