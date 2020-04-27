var express = require("express");
var router = express.Router();

var User = require("../../models/User");

router.route("/login").post((req, res) => {
  console.log(req.body.tel, req.body.pass);
  User.find({ tel: req.body.tel, pass: req.body.pass }, (err, user) => {
    if (err) {
      console.log("账户密码错误");
    } else {
      // console.log(req.body.name, req.body.pass)
      console.log(user);
      res.json(user);
    }
  });
});

module.exports = router;
