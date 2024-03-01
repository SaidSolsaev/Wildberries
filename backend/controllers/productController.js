import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const createProduct = async(req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await Category.findByIdAndUpdate(
            req.body.category, {$push: {products: newProduct}}, {new: true}
        );
        
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);    
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async(req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true}
        );

        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    
    try {
        const deletedProduct = await Product.findByIdAndDelete(product._id);
        
        await Category.findByIdAndUpdate(deletedProduct.category, {$pull: {products: deletedProduct._id}}, {new: true});
        res.status(200).json("Product deleted");
    } catch (error) {
        next(error);
    }
}


export const getProduct = async(req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log(product);
        res.status(200).json(product);
    } catch (error) {
        next(error)
    }
};

export const getAllProducts = async (req, res, next) => {
    const {min, max, ...others} = req.query;
    let lim = req.query.limit;
    
    try {    
        const products = await Product.find({
            ...others,
            price : {$gt: min || 1, $lt: max || 999999999},
        }).limit(parseInt(lim));
        
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export const getProductByCategory = async(req, res, next) => {

    const categoryId = req.params.categoryId;

    try {
        const products = await Product.find({category: categoryId})
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

