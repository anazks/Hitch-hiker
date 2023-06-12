const mongoose = require('mongoose');

const connect =()=>{
    return mongoose.connect('mongodb+srv://user:123@cluster0.kop4wrn.mongodb.net/RodeShare?retryWrites=true&w=majority')
}
module.exports = connect;