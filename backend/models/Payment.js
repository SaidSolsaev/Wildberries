import mongoose from "mongoose";

const Payment = new mongoose.Schema({
    

    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    payment_method: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Payment Successful", "Payment Cancelled"]
    }

})

export default mongoose.model("Payment", Payment);
