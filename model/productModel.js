import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  imagelink: String,
  price: Number,
  quantity: Number,
  total: Number,
  cart: Boolean,
  stock: Number,
  offer: Number,
  category: String,
  rating: Number,
  numReviews: Number,
  slug: String,
});

export default mongoose.model("products", productSchema);
