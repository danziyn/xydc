var express = require("express");
var up = express.Router();

var User = require("../../models/Comment");

up.route("/upcommid").post((req, res) => {
  console.log("我是更改id的内容", req.body);
  // User.find({'data.shop_id' : req.body.old_id}, (err, user) => {
  //     console.log(user)
  // })
  User.updateMany(
    { "data.shop_id": req.body.old_id },
    { $set: { "data.shop_id": req.body.new_id } },
    (err) => {}
  );
});

module.exports = up;
