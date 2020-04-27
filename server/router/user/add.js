var express = require("express");
var add = express.Router();

var User = require("../../models/User");

add.route("/add").post(async (req, res) => {
  // console.log(req.body.name, typeof req.body.pass)
  // 判断是否为空
  // User.find({tel: req.body.tel}, (err, user) => {
  //     if(err) {
  //         console.log('账户密码错误')
  //     }else {
  //         // console.log(user.length)
  //         if(user.length != 0) {
  //             res.json('该号码以及注册')
  //         }else {
  //             if(req.body.tel != '') {
  //                 if(req.body.pass != '') {
  //                     var user = new User({
  //                         tel: req.body.tel,
  //                         pass: req.body.pass,
  //                         age: '暂无数据',
  //                         sex: '暂无数据',
  //                         address: '暂无数据',
  //                         nickname: req.body.nickname,
  //                         shoporder: []
  //                     });
  //                     console.log(user)
  //                     user.save((err, user) => {
  //                         res.json('恭喜您,添加成功')
  //                     })
  //                 }else {
  //                     res.json('pass')
  //                 }
  //             }else {
  //                 res.json('name')
  //             }
  //         }
  //     }
  // })
  const model = await User.create(req.body);
  res.send("ok");
  // if(req.body.tel != '') {
  //     if(req.body.pass != '') {
  //         var user = new User({
  //             tel: req.body.tel,
  //             pass: req.body.pass,
  //             age: '暂无数据',
  //             sex: '暂无数据',
  //             address: '暂无数据',
  //         });

  //         user.save((err, user) => {
  //             res.json('恭喜您,添加成功')
  //         })
  //     }else {
  //         res.json('pass')
  //     }
  // }else {
  //     res.json('name')
  // }
});

module.exports = add;
