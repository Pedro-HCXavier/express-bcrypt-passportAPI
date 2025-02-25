require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const connectDB = require('./db/db')
const mongoose = require('mongoose')

// Se o servidor rodar na porta 3012, quer dizer que o dotenv não está funcionando corretamente
const PORT = process.env.PORT || 3012

const app = express()

// middleware

const secretSecret = 'senhaGenerica10'
app.use(cookieParser(secretSecret))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret : secretSecret,
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : 6000 * 60,

    }
}))

app.use(passport.initialize())
app.use(passport.session())


// rotas

const olaMundo = require('./routes/olamundo')
const rotaRegistrar = require('./routes/registrar')
const rotaLogin = require('./routes/login')

app.use('/', olaMundo)
app.use('/login', rotaLogin)
app.use('/registrar', rotaRegistrar)


// Rotas de api - Essas rotas não precisam de um arquivo html
const rotaAuth = require('./routes/auth')

app.use('/api/auth', rotaAuth)

connectDB()

app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`)
})

process.on("SIGINT", async () => {
    console.log("🛑 Encerrando conexão com o MongoDB...");
    await mongoose.connection.close();
    console.log("✅ Conexão encerrada com sucesso!");
    process.exit(0);
  });