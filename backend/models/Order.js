import mongoose from "mongoose";

const Order = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },

    date: {
        type: Date,
        default: new Date(),
    },

    total_amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Sent", "Cancelled"]
    },

    ShippingAdress: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

})

export default mongoose.model("Order", Order )