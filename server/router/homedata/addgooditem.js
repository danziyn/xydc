var express = require("express");
var add = express.Router();

var User = require("../../models/Home");

add.route("/additem").post((req, res) => {
  // console.log(req.body)
  var alternative = req.body.name;
  var data = {};
  data.item_title = req.body.item_title;
  data.item_img = req.body.item_img;
  data.item_price = req.body.item_price;
  data.item_desc = req.body.item_desc == "" ? "暂无数据" : req.body.item_desc;
  data.item_number = req.body.item_number;
  // console.log(data)

  User.findOne({ _id: req.body._id }, (err, user) => {
    // console.log(user, user.tel)
    // let type = req.body.type
    // console.log(req.body._id)
    var new_data = {};
    new_data._id = user._id;
    new_data.type = user.type;
    new_data.tel = user.tel;
    new_data[user.type] = {};
    new_data[user.type].head_title = user[user.type].head_title;
    new_data[user.type].head_logo = user[user.type].head_logo;
    new_data[user.type].head_desc = user[user.type].head_desc;
    new_data[user.type].meggages = user[user.type].meggages;
    new_data[user.type].userevaluation = user[user.type].userevaluation;
    new_data[user.type].goodlist = user[user.type].goodlist;

    new_data[user.type].goodlist[alternative].item1.push(data);
    var new_dataa = new User({
      [user.type]: {
        head_title: user[user.type].head_title,
        head_logo: user[user.type].head_logo,
        head_desc: user[user.type].head_desc,
        meggages: user[user.type].meggages,
        userevaluation: user[user.type].userevaluation,
        goodlist: new_data[user.type].goodlist,
      },
      type: user.type,
      tel: user.tel,
    });
    // console.log(new_dataa.near.goodlist.)

    // for(let i of user[user.type].goodlist) {
    //     console.log(i)
    // }
    // let list = Object.keys(user[user.type].goodlist)
    // console.log(list)
    // for(let i of list) {
    //     if(alternative != i) {
    //         new_data[user.type].goodlist[i] = user[user.type].goodlist[i]
    //     }
    // }

    // new_data[user.type].goodlist[alternative].item1.push(data)

    // console.log(new_data[user.type].goodlist[alternative].item1)
    // console.log('new_data', new_data)

    // 删除
    var wherestr = { _id: req.body._id };
    User.remove(wherestr, function (err, res) {
      // console.log('删除成功')
    });

    new_dataa.save((err, user) => {
      res.json(user);
    });
    // res.json('注销成功')
  });
});

module.exports = add;
