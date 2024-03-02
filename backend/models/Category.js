import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String
    },

    image: {
        type: String,
    },
    
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
})

export default mongoose.model("Category", Category);