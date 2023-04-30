var createError = require("http-errors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
var express = require("express");
const cors = require("cors");
const db = require("./db");
const Article = require("./models/articles");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var apiRouter = require("./routes/newsApi");
const articlesRouter = require("./routes/articles");
var app = express();
const BACKPORT = process.env.BACKPORT || 3000;

const bodyParser = require("body-parser");

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/api", apiRouter);
app.use("/api/articles", articlesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//database addition from david
app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON bodies in the request

app.get("/endpoint", function (req, res) {
  // Use Mongoose to interact with your MongoDB Atlas database here and send the result with res.json()
});
// Endpoint to get all articles
app.get("/api/articles", async (req, res) => {
  const articles = await Article.find().sort("publishedAt");
  res.send(articles);
});

app.listen(BACKPORT, function () {
  console.log("Example app listening on port " + BACKPORT);
});

module.exports = app;
