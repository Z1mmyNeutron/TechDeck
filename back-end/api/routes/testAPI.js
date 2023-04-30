var express = require("express");
var router = express.Router();
const Article = require("../models/articles");

const article = new Article({
  name: "John",
  industry: "marketing",
});

//test save to database
//article.save();

router.get("/", function (req, res, next) {
  //res.send(article);
  //res.send("API is working properly");
});

router.get("/articles", async (req, res) => {
  const result = await Article.find();
  res.send({ articles: result });
});

module.exports = router;
