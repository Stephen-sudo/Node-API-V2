import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productContoller.js";
const router = express.Router();

//Get all products
router.get("/", getAllProducts);

//Create one product
router.post("/", createProduct);
//Get one product
router.get("/:id", getProduct);
//Update one product
router.put("/:id", updateProduct);

//Delete one product
router.delete("/:id", deleteProduct);

export default router;
