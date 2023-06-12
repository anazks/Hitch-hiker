const mongoose = require('mongoose');

const passengerRiderRequests = new mongoose.Schema({
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
    destination:{
        type:String,
        require:true
    },
    pickup:{
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
    satingPointT:{
        type:String,
        require:true
    },
    endPointT:{
        type:String,
        require:true
    }
},{timestamps: true})

module.exports = mongoose.model('passengerRiderRequests',passengerRiderRequests)