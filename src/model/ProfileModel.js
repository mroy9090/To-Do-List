const mongoose = require('mongoose')

const dataSchema=mongoose.Schema({
    firstname:      {type: String,required: true,},
    lastname:       {type: String,required: true},
    email:          {type: String,required: true},
    mobilenumber:   {type: String,required: true,unique: true},
    username:       {type: String,required: true},
    password:       {type: String,required: true},
},{versionkey:false})

const ProfileModel=mongoose.model('profile', dataSchema)

module.exports=ProfileModel