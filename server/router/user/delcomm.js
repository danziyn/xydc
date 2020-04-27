var express = require("express");
var del = express.Router();

var User = require("../../models/User");

del.route("/deletecomm").post((req, res) => {
  console.log("我接受到了删除ajax函数");
  User.update(
    { tel: req.body.tel },
    {
      $pull: {
        shoporder: {
          _id: req.body._id,
          time: req.body.time,
          item_title: req.body.shopname,
        },
      },
    },
    { multi: true },
    (err, res) => {
      // console.log('我也不知道成功了没,自己去看', res)
    }
  );
  res.json("删除订单成功");
});

module.exports = del;
