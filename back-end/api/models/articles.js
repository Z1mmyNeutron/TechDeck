const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  content: String,
  category: String,
});

// Create a text index on the title and description fields
articleSchema.index({ title: "text", description: "text" });

module.exports = mongoose.model("Article", articleSchema);
