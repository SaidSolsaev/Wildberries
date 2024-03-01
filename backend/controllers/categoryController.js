import Category from "../models/Category.js"


export const createCategory = async (req, res, next) => {

    const newCategory = new Category(req.body);

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (error) {
        next(error);
    }
}

export const updateCategory = async(req, res, next) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedCategory);
    } catch (error) {
        next(error)
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json("Category deleted");
    } catch (error) {
        next(error);
    }
}

export const getCategory = async (req, res, next) => {
    try {
        const prod = await Category.findById(req.params.id);
        res.status(200).json(prod);
    } catch (error) {
        next(error);
    }
}

export const getAllCategories = async (req, res, next) => {
    let lim = req.query.limit;


    try {
        var Categories;
        lim = parseInt(lim);
        if (lim){
            Categories = await Category.find().limit(lim);
        } else{
            Categories = await Category.find();
        }
        res.status(200).json(Categories);
    } catch (error) {
        next(error);
    }
}
