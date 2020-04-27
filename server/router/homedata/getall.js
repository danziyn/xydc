var express = require("express");
var getall = express.Router();

var User = require("../../models/Home");

getall.route("/redata").get((req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      console.log("账户密码错误");
    } else {
      // console.log(user)
      res.json(user);
    }
  });
});

// localhost:3000/data/redata
module.exports = getall;
