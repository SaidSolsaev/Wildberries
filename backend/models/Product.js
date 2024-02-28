import mongoose from "mongoose";

const Product = new mongoose.Schema({
    
    createdAt:{
        type: Date,
        default: new Date(),
    },

    title:{
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    isFeatured:{
        type: Boolean,
        default: false,
    },

    price:{
        type: Number,
        required: true,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
})

export default mongoose.model("Product", Product);