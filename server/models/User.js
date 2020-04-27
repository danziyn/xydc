var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    tel: String,
    pass: String,
    age: String,
    sex: String,
    address: String,
    shoporder: Array,
    nickname: String
})

module.exports = mongoose.model('user', userSchema)