const express = require('express')
const router = express.Router()
passport = require('passport')
require('../strategies/local-strategy')

router.get('/', (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send('Não autenticado')

    res.status(200).json(req.user)
})




module.exports = router