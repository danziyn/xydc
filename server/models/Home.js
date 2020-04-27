var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    // _id: Object,
    near: Object,
    meng: Object,
    xue: Object,
    ju: Object,
    tian: Object,
    conv: Object,
    type: String,
    tel: String
})

module.exports = mongoose.model('apple', userSchema)