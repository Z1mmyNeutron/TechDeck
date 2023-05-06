const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
CONNECTION = process.env.CONNECTION;
const uri = CONNECTION;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas!");
});
const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

})
const User = mongoose.model('users', UserSchema);
User.createIndexes();



module.exports = db;
