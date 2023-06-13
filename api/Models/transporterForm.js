const mongoose = require('mongoose');

const transporterrideRequest = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    route:{
        type:String,
        require:true
    },
    routEnd:{
        type:String,
        require:true
    },
    vehicle:{
        type:String,
        require:true
    },
    vehino:{
        type:String,
        require:true
    },
    hint:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true
    },
    acceptBy:{
        type:String,
        require:true
    },
    pickUpForP:{
        type:String,
        require:true
    },
    destiForP:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:"Available"
    },
    payment:{
        type:String,
        default:"Not available"
    },
    amount:{
        type:String,
        default:10
    }
},{timestamps: true})

module.exports = mongoose.model('transporterrideRequest',transporterrideRequest)