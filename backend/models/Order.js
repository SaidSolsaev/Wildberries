import mongoose from "mongoose";

const Order = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },

    date: {
        type: Date,
        default: new Date(),
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        quantity: Number,
        ref: "Product"
    }],

    total_amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Sent", "Cancelled"]
    },

    shippingAdress: {
        country: String,
        city: String,
        street: String,
        postalCode: String,
    },

    userInfo: {
        name: String,
        email: String,
        phone: Number,
    }

})

export default mongoose.model("Order", Order )