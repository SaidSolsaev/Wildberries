import mongoose from "mongoose";

const CartItem = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    quantity: {
        type: Number
    }

})

export default mongoose.model("CartItem", CartItem)