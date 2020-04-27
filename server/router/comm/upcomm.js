var express = require("express");
var up = express.Router();

var User = require("../../models/Comment");

up.route("/upcomm").post((req, res) => {
  // console.log(req.body)
  var updata = {
    user_id: req.body.user_id,
    shop_id: req.body.shop_id,
    shop_title: req.body.shop_title,
    item_title: req.body.item_title,
    item_img: req.body.item_img,
    user_content: req.body.user_content,
    score: req.body.score,
    create_time: req.body.create_time,
    time: req.body.time,
    shopcontent: req.body.shopcontent,
    shopcontenttime: req.body.shopcontenttime,
  };
  User.update({ _id: req.body._id }, { $set: { data: updata } }, (err) => {
    res.json("评论成功");
  });
});

module.exports = up;
