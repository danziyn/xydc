var express = require("express");
var routerr = express.Router();

var User = require("../../models/Comment");

routerr.route("/all").get((req, res) => {
  // res.send('11111111111')
  User.find({}, (err, user) => {
    // console.log(user)
    res.json(user);
  });
});

module.exports = routerr;
