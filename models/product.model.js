const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "pls enter product name"],
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: String,
    required: true,
  },
});
