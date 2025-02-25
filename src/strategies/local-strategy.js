const passport = require('passport')
const { Strategy } = require('passport-local')
const User = require('../db/models/User')
require('mongoose')

const bcrypt = require('bcrypt')


passport.serializeUser((user, done) => {
    console.log("🔹 Dentro do serializeUser");
    console.log(user);
        
    if (!user || !user._id) {
        return done(new Error("Usuário inválido ou sem ID"), null);
    }
    
    done(null, user._id.toString());
})

passport.deserializeUser(async (id, done) => {
    console.log(`🔹 Deserializando user id : ${id}`)
    try {

        const findUsers = await User.findById(id)

        if ( !findUsers ) throw new Error('🛑 User não encontrado')

        done(null, findUsers.id)

    } catch (err) {

        done(err, null)
    }
})

passport.use(
    new Strategy(
      { usernameField: "email", passwordField: "senha" },
      async (email, senha, done) => {
        try {
          const findUser = await User.findOne({ email })
          if (!findUser) return done(null, false, { message : 'Email não encontrado' })
          if (!bcrypt.compareSync(senha, findUser.senha)) return done(null, false, { message : 'Senha incorreta' })
          
          done(null, findUser)
        } catch (err) {
          console.error("Erro na autenticação:", err)
          done(err, null)
        }
      }
    )
  )

module.exports = passport