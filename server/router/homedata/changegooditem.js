var express = require("express");
var up = express.Router();

var User = require("../../models/Home");

up.route("/upgooditem").post((req, res) => {
  // 本办法:一个一个查询是否为空,在觉得是否跟改对象
  var data = {};
  data.item_title = req.body.item_title;
  data.item_img = req.body.item_img;
  data.item_price = req.body.item_price;
  data.item_desc = req.body.item_desc;
  data.item_number = req.body.item_number;
  var old_data = {};
  old_data = req.body.item;
  var rightdis = req.body.rightdis;
  // console.log(data, old_data, rightdis)

  var new_data = {};
  new_data._id = rightdis._id;
  new_data.type = rightdis.type;
  new_data.tel = rightdis.tel;
  new_data[rightdis.type] = {};
  new_data[rightdis.type].head_title = rightdis[rightdis.type].head_title;
  new_data[rightdis.type].head_logo = rightdis[rightdis.type].head_logo;
  new_data[rightdis.type].head_desc = rightdis[rightdis.type].head_desc;
  new_data[rightdis.type].meggages = rightdis[rightdis.type].meggages;
  new_data[rightdis.type].userevaluation =
    rightdis[rightdis.type].userevaluation;
  new_data[rightdis.type].goodlist = {};
  // new_data[rightdis.type].goodlist = rightdis[rightdis.type].goodlist

  let list = Object.keys(rightdis[rightdis.type].goodlist);
  for (let w of list) {
    new_data[rightdis.type].goodlist[w] = {};
    new_data[rightdis.type].goodlist[w].name =
      rightdis[rightdis.type].goodlist[w].name;
    new_data[rightdis.type].goodlist[w].item1 = [];
  }

  for (let i of list) {
    for (let o of rightdis[rightdis.type].goodlist[i].item1) {
      // console.log(o)
      if (o.item_title == req.body.item.item_title) {
        // console.log(o)
        new_data[rightdis.type].goodlist[i].item1.push(data);
      } else {
        new_data[rightdis.type].goodlist[i].item1.push(o);
      }
    }
  }

  var new_dataa = new User({
    _id: new_data._id,
    [rightdis.type]: {
      head_title: new_data[rightdis.type].head_title,
      head_logo: new_data[rightdis.type].head_logo,
      head_desc: new_data[rightdis.type].head_desc,
      meggages: new_data[rightdis.type].meggages,
      userevaluation: new_data[rightdis.type].userevaluation,
      goodlist: new_data[rightdis.type].goodlist,
    },
    type: rightdis.type,
    tel: rightdis.tel,
  });

  // console.log(new_dataa)

  var wherestr = { _id: new_data._id };
  // console.log(wherestr)
  User.remove(wherestr, function (err, res) {
    // console.log('删除成功')
  });

  new_dataa.save((err, user) => {
    // console.log(user)
  });
  res.json("更新成功");
});

module.exports = up;
