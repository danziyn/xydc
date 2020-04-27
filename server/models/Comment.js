var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    data: Object,
})

module.exports = mongoose.model('comment', userSchema)