var express = require("express");
var router1 = express.Router();

var User = require("../../models/User");

router1.route("/all").get((req, res) => {
  // res.send('11111111111')
  User.find({}, (err, user) => {
    res.json(user);
  });
});

module.exports = router1;
