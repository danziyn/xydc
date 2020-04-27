var express = require("express");
var add = express.Router();

var User = require("../../models/Home");

add.route("/delitem").post((req, res) => {
  // console.log(req.body)
  // var alternative = req.body.name
  var data = {};
  data.item = req.body.item;
  data.shopid = req.body.shopmess;
  // console.log(data)
  // console.log(data)

  User.findOne({ _id: data.shopid._id }, (err, user) => {
    // console.log(user, user.tel)
    // let type = req.body.type
    // console.log(user)
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
    new_data[user.type].goodlist = {};

    // var
    let list = Object.keys(user[user.type].goodlist);

    for (let w of list) {
      new_data[user.type].goodlist[w] = {};
      new_data[user.type].goodlist[w].name =
        req.body.shopmess[user.type].goodlist[w].name;
      new_data[user.type].goodlist[w].item1 = [];
    }

    // console.log(list)
    for (let i of list) {
      for (let o of user[user.type].goodlist[i].item1) {
        // console.log(o)
        if (o.item_title != req.body.item.item_title) {
          // console.log(o)
          new_data[user.type].goodlist[i].item1.push(o);
        }
      }
    }

    console.log(new_data._id);
    // console.log(new_data[user.type].goodlist)
    // new_data[user.type].goodlist = user[user.type].goodlist

    // new_data[user.type].goodlist[alternative].item1.push(data)
    var new_dataa = new User({
      [req.body.shopmess.type]: {
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

    // console.log(new_dataa)
    // 删除
    var wherestr = { _id: new_data._id };
    // console.log(wherestr)
    User.remove(wherestr, function (err, res) {
      // console.log('删除成功')
    });

    new_dataa.save((err, user) => {
      // console.log(user)
      res.json(user);
    });
    // res.json('注销成功')
  });
});

module.exports = add;
