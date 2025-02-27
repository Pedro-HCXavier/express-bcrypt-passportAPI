const express = require('express')
const router = express.Router()
const path = require('path')
const rotaAuth = require('./auth')



router.get('/', rotaAuth, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/views/cofre.html'))
})


module.exports = router