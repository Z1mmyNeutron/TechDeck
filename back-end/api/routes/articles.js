const express = require("express");
const router = express.Router();
const Article = require("../models/articles"); // Ensure the path is correct

// GET request to '/api/articles'
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort("publishedAt");
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET request to '/api/articles/:id'
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
