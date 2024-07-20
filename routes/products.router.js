const router = require("express").Router();
const productController = require("../controllers/Product.controller");
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getSingleProducts);
router.post("/", productController.createProduct);
router.get("/search/:key", productController.searchProduct);
module.exports = router;
