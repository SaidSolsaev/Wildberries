import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js";
import { createProduct, deleteProduct, getAllProducts, getByCategory, getProduct, updateProduct } from "../controllers/productController.js";


//GET
router.get("/:id", getProduct)

//GET ALL
router.get("/", getAllProducts)


router.get("/getByCategory/:categoryId", getByCategory)


export default router;