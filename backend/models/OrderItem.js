import mongoose from "mongoose";

const OrderItem = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Order"
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
});

export default mongoose.model("OrderItem", OrderItem);
