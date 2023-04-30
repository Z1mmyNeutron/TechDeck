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

module.exports = router;
