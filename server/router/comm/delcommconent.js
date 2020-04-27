// 删除订单需要把评论删除
var express = require("express");
var del = express.Router();

var User = require("../../models/Comment");

del.route("/delcommcon").post((req, res) => {
  console.log("我接受到了删除ajax函数", req.body);

  User.remove(
    {
      "data.shop_id": req.body._id,
      "data.shop_title": req.body.head_title,
      "data.item_title": req.body.item_title,
      "data.create_time": req.body.user_time,
    },
    function (err, res) {
      console.log("删除成功了吗");
    }
  );

  res.json("删除订单成功1");
});

module.exports = del;
