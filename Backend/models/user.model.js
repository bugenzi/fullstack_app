const mongoose = require("mongoose");
const booksReadSchema = require("./reading.model");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 5,
    max: 20,
    unique: true,
  },
  name: {
    type: String,
    min: 3,
    max: 30,
  },
  surname: {
    type: String,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  description: {
    type: String,
    min: 80,
    max: 120,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  favoriteBooks: [booksReadSchema],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feeds",
      autopopulate: true,
    },
  ],
  followers:[{type:mongoose.Schema.Types.ObjectId,ref:"Users"}],
  following:[{type:mongoose.Schema.Types.ObjectId,ref:"Users"}]
});
userSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Users", userSchema);
