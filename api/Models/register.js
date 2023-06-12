const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    admin:{
        type:String,
        require:true
    }
},{timestamps: true})

module.exports = mongoose.model('userModel',userModel)