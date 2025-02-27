const express = require('express')
const router = express.Router()
passport = require('passport')
require('../strategies/local-strategy')

router.get('/', (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/login')

    res.status(200).send(req.user)

    next()
})




module.exports = router