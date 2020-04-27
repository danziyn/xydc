var express = require("express");
var addolder = express.Router();

var User = require("../../models/User");

addolder.route("/addolder").post((req, res) => {
  console.log("用户添加自己的订单", req.body);
  for (let i of req.body.listcopy) {
    let data = {};
    data._id = i._id;
    data.name = req.body.tel;
    data.head_title = i.head_title;
    data.item_title = i.item_title;
    data.item_img = i.item_img;
    if (i.discount == undefined) {
      data.item_price = i.item_price;
    } else {
      data.item_price =
        "折后" + i.item_price * Number("0." + i.discount) * i.count;
    }
    data.user_time = req.body.time;
    console.log(data);
    User.update(
      { tel: req.body.tel },
      { $addToSet: { shoporder: data } },
      function (err) {
        if (err) {
          // res.send(500);
          console.log(err);
        }
      }
    );
    //     // console.log(data)
    data = {};
    //     // res.send('发送成功')
  }
  res.send("结算成功");
});

module.exports = addolder;
