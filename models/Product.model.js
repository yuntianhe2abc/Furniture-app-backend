const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productLocation: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);
module.exports = mongoose.model("Product", ProductSchema);
