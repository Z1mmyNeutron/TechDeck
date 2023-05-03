var express   = require('express');
var router    = express.Router();
var mongoose  = require("mongoose");
var passport  = require("passport");
var bodyParse = require("body-parser");
var LocalStrategy = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose");
const User = require("../models/users");
var app = express();
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect()

var User = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
})
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
