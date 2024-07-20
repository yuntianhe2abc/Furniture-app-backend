const Product = require("../models/Product.model");
module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("product created successfully");
    } catch (err) {
      res.status(500).json("failed to create the product");
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({}).sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json("failed to get products");
    }
  },
  getSingleProducts: async (req, res) => {
    try {
      const products = await Product.findById(req.params.id);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json("failed to get the product");
    }
  },
  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "furniture",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json("failed to get the products");
    }
  },
};
