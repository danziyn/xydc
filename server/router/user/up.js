var express = require("express");
var up = express.Router();

var User = require("../../models/User");

up.route("/up").post((req, res) => {
  // 本办法:一个一个查询是否为空,在觉得是否跟改对象
  var tel = { tel: req.body.tel };
  var pass = { pass: req.body.pass };
  var age = { age: req.body.age };
  var sex = { sex: req.body.sex };
  var address = { address: req.body.address };
  console.log(tel);
  User.findOne({ tel: req.body.tel }, (err, user) => {
    if (err) {
      res.json("没有此账户");
    } else {
      console.log(pass, age, sex, address);
      if (user == null) {
        res.json("没有此账户");
      } else {
        console.log(pass.pass);
        if (pass.pass != "") {
          User.update(tel, pass, (err, res) => {});
        }
        console.log(age.age);
        if (age.age != "") {
          User.update(tel, age, (err, res) => {});
        }
        console.log(sex.sex);
        if (sex.sex != "") {
          User.update(tel, sex, (err, res) => {});
        }
        if (address.address != "") {
          User.update(tel, address, (err, res) => {});
        }
        res.json("更新成功");
      }
    }
  });
});

module.exports = up;
