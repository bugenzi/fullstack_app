const { boolean } = require("@hapi/joi");
const mongoose = require("mongoose");
const commentSchema=require("../models/comment.model")

const feedSchema = new mongoose.Schema({

  userName:{
    type:String,
  },
  userId:{
  type:String
  },
  postInput:{
    type:String,
    min:1,
    max:225
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    autopopulate: true,
  }],
});

feedSchema.plugin(require("mongoose-autopopulate"))
// const BookTrade = mongoose.model("BookTrade", tradingSchema)
module.exports = mongoose.model("Feeds",feedSchema);
