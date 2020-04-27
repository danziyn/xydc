var express = require("express");
var add = express.Router();

var User = require("../../models/Home");

add.route("/adddiscount").post((req, res) => {
  console.log("adddiscount");

  // console.log(user)

  // newdata = req.body.shopitem
  // console.log(req.body.shopitem)
  User.findOne({ _id: req.body.shopitem._id }, (err, user) => {
    var newshop = new User({
      [req.body.shopitem.type]: {
        head_title: req.body.shopitem[req.body.shopitem.type].head_title,
        head_logo: req.body.shopitem[req.body.shopitem.type].head_logo,
        head_desc: req.body.shopitem[req.body.shopitem.type].head_desc,
        meggages: req.body.shopitem[req.body.shopitem.type].meggages,
        userevaluation:
          req.body.shopitem[req.body.shopitem.type].userevaluation,
        goodlist: {},
      },
      type: req.body.shopitem.type,
      tel: req.body.shopitem.tel,
    });

    var newdata = {};
    newdata = user[user.type].goodlist;
    // console.log(newdata)

    var list = Object.keys(newdata);
    // console.log(list)

    for (let i of list) {
      // console.log(i)
      newshop[req.body.shopitem.type].goodlist[i] = {};
      newshop[req.body.shopitem.type].goodlist[i].name = newdata[i].name;
      newshop[req.body.shopitem.type].goodlist[i].item1 = [];
      // console.log(newdata[newdata.type].goodlist[i])
    }

    for (let w of list) {
      for (let o of user[user.type].goodlist[w].item1) {
        // console.log(o)
        if (o.item_title == req.body.item.item_title) {
          var new_data = {};
          new_data.item_title = o.item_title;
          new_data.item_img = o.item_img;
          new_data.item_price = o.item_price;
          new_data.item_desc = o.item_desc;
          new_data.item_number = o.item_number;
          new_data.shopcontent = req.body.content;
          new_data.discount = req.body.discount;
          newshop[req.body.shopitem.type].goodlist[w].item1.push(new_data);
        } else {
          newshop[req.body.shopitem.type].goodlist[w].item1.push(o);
        }
      }
    }

    console.log("111", newshop);

    var wherestr = { _id: req.body.shopitem._id };

    User.remove(wherestr, function (err, res) {
      // console.log('删除成功')
    });

    newshop.save((err, user) => {
      var oldandnewid = {
        old: req.body.shopitem._id,
        new: newshop._id,
      };
      console.log(oldandnewid);
      res.json(oldandnewid);
    });
  });

  // newdata[newdata.type].goodlist = []

  // console.log('111', req.body.shopitem)
  // var list = Object.keys(req.body.shopitem[req.body.shopitem.type].goodlist)
  // console.log(list)

  // for(let i of list) {
  //     // console.log(i)
  //     newdata[newdata.type].goodlist[i] = {}
  //     newdata[newdata.type].goodlist[i].name = req.body.shopitem[req.body.shopitem.type].goodlist[i].name
  //     newdata[newdata.type].goodlist[i].item1 = []
  //     // console.log(newdata[newdata.type].goodlist[i])
  // }

  // console.log(newdata)
  // var new_dataa = new User({
  //     // '_id': req.body.shopitem._id,
  //     [req.body.shopitem.type]: {
  //         head_title: req.body.shopitem[req.body.shopitem.type].head_title,
  //         head_logo : req.body.shopitem[req.body.shopitem.type].head_logo,
  //         head_desc : req.body.shopitem[req.body.shopitem.type].head_desc,
  //         meggages : req.body.shopitem[req.body.shopitem.type].meggages,
  //         userevaluation : req.body.shopitem[req.body.shopitem.type].userevaluation,
  //         goodlist : []
  //     },
  //     type: req.body.shopitem.type,
  //     tel : req.body.shopitem.tel
  // })
  // var list = Object.keys(req.body.shopitem[req.body.shopitem.type].goodlist)
  // for(let i of list) {
  //     // console.log(i)
  //     new_dataa[req.body.shopitem.type].goodlist[i] = {}
  //     new_dataa[req.body.shopitem.type].goodlist[i].name = req.body.shopitem[req.body.shopitem.type].goodlist[i].name
  //     new_dataa[req.body.shopitem.type].goodlist[i].item1 = []
  // }
  // // console.log(new_dataa[user.type].goodlist)

  // for(let s of list) {
  //     for(let w of req.body.shopitem[req.body.shopitem.type].goodlist[s].item1) {
  //         // console.log(w.item_title, '     ', req.body.item.item_title)
  //         if(w.item_title == req.body.item.item_title) {
  //             // console.log('111', w)
  //             var newdata = {}
  //             newdata.item_title = w.item_title
  //             newdata.item_img = w.item_img
  //             newdata.item_price = w.item_price
  //             newdata.item_desc = w.item_desc
  //             newdata.item_number = w.item_number
  //             newdata.shopcontent = req.body.content
  //             newdata.discount = req.body.discount

  //             // console.log(newdata)
  //             new_dataa[req.body.shopitem.type].goodlist[s].item1.push(newdata)
  //         }else {
  //             new_dataa[req.body.shopitem.type].goodlist[s].item1.push(w)
  //         }
  //     }
  //     // console.log(new_dataa[user.type].goodlist.classificationone)
  // }

  // // newshop[req.body.shopitem.type].goodlist = new_dataa[user.type].goodlist
  // console.log('111', new_dataa[req.body.shopitem.type].goodlist)
  // console.log('222', new_dataa[req.body.shopitem.type])
  // console.log('333', new_dataa)

  // console.log(newshop[req.body.shopitem.type].goodlist)
});

module.exports = add;
