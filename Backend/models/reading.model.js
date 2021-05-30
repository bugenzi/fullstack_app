const { boolean } = require("@hapi/joi");
const mongoose = require("mongoose");

const bookReadingSchema = new mongoose.Schema({
  bookName: {
    type: Array,
    required: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    min: 60,
    max: 180,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },


});

// const BookTrade = mongoose.model("BookTrade", tradingSchema)

module.exports = bookReadingSchema;
