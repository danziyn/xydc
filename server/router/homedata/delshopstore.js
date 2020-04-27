var express = require("express");
var del = express.Router();

var User = require("../../models/Home");

del.route("/delstore").post((req, res) => {
  // var pass = req.body._id
  // console.log(req.body)
  var wherestr = { _id: req.body._id };

  User.remove(wherestr, function (err, res) {
    console.log("删除成功");
  });
  res.json("删除店铺成功");
});

module.exports = del;
