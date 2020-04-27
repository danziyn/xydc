module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const User = require("../../models/User");

  router.get("/", async (req, res) => {
    req.model.find({}, (err, user) => {
      res.json(user);
    });
  });

  router.get("/:id", async (req, res) => {
    const model = await req.model.findById(req.params.id);
    res.send(model);
  });

  router.delete("/:id", async (req, res) => {
    console.log("delete删除", req.params.id);
    await req.model.findByIdAndDelete(req.params.id);
    res.send("删除成功");
  });

  router.post("/", async (req, res) => {
    // console.log(req.body);
    const model = await req.model.create(req.body);
    res.send(model);
  });

  router.put("/:id", async (req, res) => {
    // console.log(req.body);
    const model = await req.model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  app.use(
    "/admin/api/:resouse",
    async (req, res, next) => {
      console.log(req.params.resouse);
      const modelName = require("inflection").classify(req.params.resouse);
      console.log("111", modelName);
      req.model = require(`../../models/${modelName}`);
      await next();
    },
    router
  );
};
