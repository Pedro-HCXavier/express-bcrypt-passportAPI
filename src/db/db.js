const mongoose = require('mongoose')

const mongoString = process.env.CONNECTION_STRING

const connectDB = async () => {
    try {
        const conectar = await mongoose.connect(mongoString , {
            maxPoolSize : 10,
        })

        console.log(`✅ MongoDB Conectado.`)
    } catch (err) {
        console.error(`Error : ${err}`)
        process.exit(1)
    }
}

module.exports = connectDB