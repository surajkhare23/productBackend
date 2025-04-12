const Product = require("../models/product");

module.exports.addProduct = async function (req, res) {
  const { title, desc, price, qty } = req.body;

  if (!title || !desc || !price || !qty) {
    res
      .status(400)
      .json({ message: "title, decription, price, quantity are required" });
  }
  try {
    let product = new Product({ title, desc, price, qty });
    await product.save();
    res
      .status(201)
      .json({ message: "product sucsessfully added", data: product });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getProduct = async function (req, res) {
  try {
    let product = await Product.find();
    if (!product) {
      res.status(404).json({ message: "product not found" });
    } else {
      res.status(200).json({ message: "Successfully fecthed", data: product });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server error", error: e });
  }
};

module.exports.updateProduct = async function (req, res) {
  const { title, desc, price, qty } = req.body;

  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "Id is missing in path params" });
  }
  try {
    let product = await Product.findByIdAndUpdate(
      id,
      { price, desc, title, qty },
      { new: true }
    );
    if (!product) {
      res.status(404).json({ message: "product not found" });
    } else {
      res
        .status(200)
        .json({ message: "product succesfully updated", data: product });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error", error: e });
  }
};

module.exports.deleteProduct = async function (req, res) {
  let { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Id is missing in path params" });
  }
  try {
    let product = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product Deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
