import mongoose from "mongoose";

const ShippingAdress = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },

    adress: {
        type: String,
        required: true
    },

    city: {
        type: String,
        rquired: true
    },

    zip: {
        type: Number,
        required: true
    },

    country: {
        type: String,
        required: true
    }

})

export default mongoose.model("ShippingAdress", ShippingAdress);