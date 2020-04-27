var mongoose = require("mongoose");
module.exports = (app) => {
  mongoose.connect("mongodb://localhost:27017/lcdb", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log();
      console.log("db connect success");
    }
  });
};
