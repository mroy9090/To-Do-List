const mongoose = require('mongoose')

const databaseSchema=mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{verionkey:false})

const UsersModel=mongoose.model('users', databaseSchema)

module.exports=UsersModel