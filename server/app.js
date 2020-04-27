var express = require("express");

var app = new express();

require("./plugins/ds")(app);

app.use(require("cors")());

app.use(express.json());

require("./router/admin")(app);

// 三个接口
// login接口
var all = require("./router/user/all");
var login = require("./router/user/login");
var up = require("./router/user/up");
var del = require("./router/user/del");
var add = require("./router/user/add");
var delcomm = require("./router/user/delcomm");
// var changeusershopid = require('./router/user/changeusershopid')

// 用户添加评论消息
var addshopolder = require("./router/user/addshopolder");

// 评论模块add
var addcomm = require("./router/comm/addcomm");
var all = require("./router/comm/index");
var upcomm = require("./router/comm/upcomm");
var delcommconent = require("./router/comm/delcommconent");
// var changecommid = require('./router/comm/')
// var delcomm = require('./router/comm/delcomm')

// 请求数据接口
var getall = require("./router/homedata/getall");
var addgooditem = require("./router/homedata/addgooditem");
var delgooditem = require("./router/homedata/delgooditem");
var changecommid = require("./router/homedata/changecommid");
var changegooditem = require("./router/homedata/changegooditem");
var addshopstore = require("./router/homedata/addshopstore");
var delshopstore = require("./router/homedata/delshopstore");
var adddiscount = require("./router/homedata/adddiscount");
// var addoldren = require('./router/homedata/addoldren')

// 连接数据库

// bodyParser = require("body-parser");
// // app.use(bodyParser.json())
// // app.use(bodyParser.urlencoded({ extended: false}))
// // 限制post大小
// app.use(bodyParser.json({ limit: "15mb" }));
// app.use(bodyParser.urlencoded({ limit: "15mb", extended: true }));

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header('Access-Control-Allow-Headers', "*")
//     next();
// });

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// })

app.use("/users", all); // 将路由注册到/users的路径下
app.use("/users", login); // 将路由注册到/users的路径下
app.use("/users", up); // 将路由注册到/users的路径下
app.use("/users", del); // 将路由注册到/users的路径下
app.use("/users", add); // 将路由注册到/users的路径下
app.use("/users", delcomm); //
// 添加用户订单的功能
app.use("/users", addshopolder); // 将路由注册到/users的路径下
// app.use('/users', changeusershopid) // 将路由注册到/users的路径下

app.use("/data", getall); // 将路由注册到/users的路径下
app.use("/data", addgooditem); //
app.use("/data", delgooditem); //
app.use("/data", changegooditem); //
app.use("/data", addshopstore); //
app.use("/data", delshopstore); //
app.use("/data", adddiscount); //

// 用户添加自己的订单功能
// app.use('/data', addoldren) // 将路由注册到/users的路径下

// 评论功能
app.use("/common", addcomm); // 将路由注册到/users的路径下
app.use("/common", all); //
app.use("/common", upcomm); //
app.use("/common", changecommid); //
app.use("/common", delcomm); //
app.use("/common", delcommconent); //

var port = process.env.PORT || 3000;

app.listen(port);
console.log("app is listening on port: " + port);
