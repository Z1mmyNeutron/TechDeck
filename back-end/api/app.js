//Christina Zimmer -> Express Server + navbar
//David Ranoia -> Mongo db hookup and additional paths
//Router.get functions are written by David App.get/use are written by Christina 

var createError = require("http-errors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
var express = require("express");
const cors = require("cors");
const db = require("./db");

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

// var bodyParser = require("body-parser"),
// LocalStrategy = require("passport-local"),
// passportLocalMongoose = 
//     require("passport-local-mongoose")
// const User = require("./model/User");
// const { route } = require("./routes/users");

// app.use(require("express-session")({
//   secret: "Rusty is a dog",
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

  


// // Showing register form
// route.get("/createUser", function (req, res) {
//   res.render("createUser");
// });
// route.post("/createUser", async (req, res) =>{
//   const user = await User.create({
//     username : req.body.username,
//     password: req.body.password
//   });
//   return res.status(200).json(user);
// });
// route.get("/login", function (req, res) {
//   res.render("login");
// });
// route.post("/login", async function(req, res){
//   try {
//       // check if the user exists
//       const user = await User.findOne({ username: req.body.username });
//       if (user) {
//         //check if password matches
//         const result = req.body.password === user.password;
//         if (result) {
//           res.render("secret");
//         } else {
//           res.status(400).json({ error: "password doesn't match" });
//         }
//       } else {
//         res.status(400).json({ error: "User doesn't exist" });
//       }
//     } catch (error) {
//       res.status(400).json({ error });
//     }
// });
// //Handling user logout 
// route.get("/logout", function (req, res) {
//   req.logout(function(err) {
//       if (err) { return next(err); }
//       res.redirect('/');
//     });
// });



// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect("/login");
// }
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON bodies in the request
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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

app.listen(BACKPORT, function () {
  console.log("Example app listening on port " + BACKPORT);
});

module.exports = app;
