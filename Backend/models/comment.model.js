const { boolean } = require("@hapi/joi");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  userId: {
    type: String,
  },
  comment: {
    type: String,
    min: 1,
    max: 225,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema)

