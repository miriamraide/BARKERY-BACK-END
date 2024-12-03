import express from "express";
import {
  fetch,
  create,
  update,
  deleteProduct,
} from "../controller/productController.js";
const route = express.Router();

route.get("/getAllProducts", fetch);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteProduct);

export default route;
