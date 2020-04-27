var express = require("express");
var add = express.Router();

var User = require("../../models/Home");

add.route("/addstore").post(async (req, res) => {
  // console.log(req.body.name, typeof req.body.pass)
  // 判断是否为空
  // console.log(req.body)
  // var data = new User({
  //     [req.body.type] : req.body[req.body.type],
  //     tel : req.body.tel,
  //     type: req.body.type,
  // })
  // // console.log(data)
  // data.save((err, user) => {
  //     res.json('保存成功')
  // })
  const model = await User.create(req.body);
  res.send(model);
});

module.exports = add;
