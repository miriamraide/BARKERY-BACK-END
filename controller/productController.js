import Product from "../model/productModel.js";

export const create = async (req, res) => {
  try {
    const productData = new Product(req.body);
    const { slug } = productData;

    const productExist = await Product.findOne({ slug });
    if (productExist) {
      return res.status(400).json({ message: "Product already exists" });
    }
    const savedProduct = await productData.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetch = async (req, res) => {
  try {
    const product = await Product.find();
    if (product.length === 0) {
      return res.status(404).json({ message: "There are no products" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findById({ _id: id });
    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(id);
    res.status(201).json({ message: "Product successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
