const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profile_picture_url: String,
    bio: String,
    role: {
      type: String,
      enum: ["admin", "author", "reader"],
      default: "reader",
    },
  },
  {
    timestamps: {
      createdAt: "registration_date",
      updatedAt: "last_login",
    },
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
