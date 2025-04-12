const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
});

const product = mongoose.model("product", productSchema);

module.exports = product;