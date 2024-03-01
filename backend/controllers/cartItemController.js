import CartItem from "../models/CartItem";

export const getCartItem = async(req, res, next) => {
    try {
        const item = await CartItem.findById(req.params.id);
        console.log(item)
        res.status(200).json(item);
    } catch (error) {
        next(error);
    }
}

export const getUserAllCartItems = async(req, res, next) => {
    const userId = req.params.userid;

    try {
        const item = await CartItem.find({user: userId});
        res.status(200).json(item);
    } catch (error) {
        next(error);
    }
}