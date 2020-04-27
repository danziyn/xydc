var express = require("express");
var del = express.Router();

var User = require("../../models/User");

del.route("/delete").post((req, res) => {
  var pass = req.body.tel;
  var wherestr = { tel: pass };

  User.findOne({ tel: req.body.tel }, (err, user) => {
    if (err) {
      res.json("没有此账户");
    } else {
      console.log(user);
      if (user == null) {
        res.json("没有此账户");
      } else {
        User.remove(wherestr, function (err, res) {
          console.log("删除成功");
        });
        res.json("注销成功");
      }
    }
  });
});

module.exports = del;
