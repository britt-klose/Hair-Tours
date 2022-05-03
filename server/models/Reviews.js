const { Schema } = require("mongoose");

const reviewSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  rating: {
    type: Number,
    default: 0,
  },
});

// const Reviews = model('Review', reviewSchema)

module.exports = reviewSchema;
