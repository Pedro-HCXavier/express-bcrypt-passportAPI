const express = require('express')
const router = express.Router()

const User = require('../db/models/User')

const hashing = require('../utils/hashing')

router.post('/', async (req, res) => {
    
    // O body precisa de email e senha
    const { body } = req
    
    body.senha = hashing(body.senha)
    try {
        const newUser = new User(body)
        // console.log(newUser)
        const saveUser = await newUser.save()

        res.status(201).send(saveUser)
    } catch (err) {
        console.error(`Error : ${err}`)
        res.status(400).send('O email deve ser único, preencha o campo senha')
    }


})

module.exports = router