var express = require("express");
var add = express.Router();

var User = require("../../models/Comment");

add.route("/add").post((req, res) => {
  // console.log(req.body.name, typeof req.body.pass)
  // console.log('commadd', req.body)
  // 判断是否为空
  var dataa = new User({
    data: {},
  });
  dataa.data.user_id = req.body.name;
  dataa.data.shop_id = req.body._id;
  dataa.data.shop_title = req.body.head_title;
  dataa.data.item_title = req.body.item_title;
  dataa.data.item_img = req.body.item_img;
  dataa.data.user_content = req.body.content;
  dataa.data.score = req.body.score;
  // 创建的时间
  dataa.data.create_time = req.body.create_time;
  // 展示的时间
  dataa.data.time = req.body.contenttime;
  // console.log(dataa, req.body.create_time)

  dataa.save((err, user) => {
    res.json("恭喜您,评论成功");
  });
});

module.exports = add;
