const mongoose = require('mongoose')

const databaseSchema=mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    otpnumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},{verionkey:false})

const otpsmodel=mongoose.model('otps', databaseSchema)

module.exports=otpsmodel