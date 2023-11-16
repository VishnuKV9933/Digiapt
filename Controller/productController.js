const productModel = require("../Model/productModel");

module.exports = {
  addProduct: async (req, res) => {
    console.log("product", req.body);

    try {
      const product = new productModel({
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        imageUrl: req.body.imageUrl,
        productDiscription: req.body.productDiscription,
      });

      const newProduct = await product.save();

      res.status(200).json({ message: "Product added successfully", product: newProduct });
      
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await productModel.findById(req.params.productId);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ product });
    } catch (error) {
      console.error("Error getting product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const { page = 1, pageSize = 10, productName, category } = req.query;
      const skip = (page - 1) * pageSize;
      const limit = parseInt(pageSize, 10);

      const products = await productModel
        .find({
          productName: { $regex: new RegExp(productName, "i") },
          productCategory: { $regex: new RegExp(category, "i") },
        })
        .skip(skip)
        .limit(limit);
      res.status(200).json({ products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await productModel.findByIdAndDelete(
        req.params.productId
      );
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
