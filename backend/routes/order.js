import express from "express"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createOrder, getOrder, getAllOrders, updateOrder, userGetOrders } from "../controllers/orderController.js";

const router = express.Router();

// ---- Only user's with admin role ---- //
//CREATE
router.post("/", createOrder )

//UPDATE
router.put("/:id", verifyAdmin, updateOrder)

// GET
router.get("/:id", verifyAdmin, getOrder)

// GET ALL
router.get("/", verifyAdmin, getAllOrders)
// ----------------------------------------- //


// GET USERS ORDERS
router.get("/user/:userid", userGetOrders)

export default router;