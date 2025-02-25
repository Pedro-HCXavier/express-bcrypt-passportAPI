const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true
    },
    senha : {
        type : String,
        required : true
    }

})

const User = mongoose.model("User", userSchema, "users")

module.exports = User