const { Schema, Types } = require("mongoose");

const reviewSchema = new Schema({
  reviewId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reviewAuthor: {
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

module.exports = reviewSchema;
