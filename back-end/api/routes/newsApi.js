const express = require("express");
const axios = require("axios");
const router = express.Router();
const app = express();
const Article = require("../models/articles");

// Function to fetch news and store in the database
router.get("/fetch-news/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=291800c0536b4545b0edfd7c7e6ed807`
    );
    response.data.articles.forEach(async (article) => {
      let newArticle = new Article({
        source: {
          id: article.source.id,
          name: article.source.name,
        },
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
        category: category,
      });

      await newArticle.save();
    });

    res.status(200).json({
      message: "News fetched and stored in the database successfully.",
    });
  } catch (err) {
    console.error("Error fetching news: ", err);
    res.status(500).json({ message: "Error fetching news" });
  }
});

module.exports = router;

/*
api hide
var app = express();
const BACKPORT = process.env.BACKPORT
*/
