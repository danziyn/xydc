var express = require('express')
var router1 = express.Router()

var User = require('../../models/user')

router1.route('/all').get((req, res) => {
    // res.send('11111111111')
    // 暂没用
    User.find({},(err, user) => {
        res.json(user)
    })
})

module.exports = router1
