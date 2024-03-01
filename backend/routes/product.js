import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js";
import { createProduct, deleteProduct, getAllProducts, getProduct, getProductByCategory, updateProduct } from "../controllers/productController.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createProduct)

//UPDATE
router.put("/:id", verifyAdmin, updateProduct)

//DELETE
router.delete("/:id", verifyAdmin, deleteProduct)

//GET
router.get("/:id", getProduct)

//GET ALL
router.get("/", getAllProducts)

router.get("/getByCategory/:categoryId", getProductByCategory);



export default router;