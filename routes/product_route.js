const productController = require("../controllers/product");
const express = require("express");

const router = express.Router();

router.post("/product", productController.addProduct);
router.get("/product", productController.getProduct);
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
