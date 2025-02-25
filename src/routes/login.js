const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err)
        if (!user) return res.status(401).send(info.message)
        
        req.logIn(user, (err) => {
            if (err) return next(err)
            return res.status(200).json(user)
        })

    }) (req, res, next) // Executando a função

    console.log('Dentro do endpoint /login')
    console.log(req.session)
}) 

module.exports = router