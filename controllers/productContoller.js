import ProductModel from "../modules/products.js";
import asyncHandler from "express-async-handler";

export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
export const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
export const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body);
    if (!updatedProduct) {
      res.status(404);
      throw new Error(`Product not found with id ${id}`);
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const DeletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!DeletedProduct) {
      res.status(404);
      throw new Error(`Product not found with id ${id}`);
    }
    res.status(200).json(DeletedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
