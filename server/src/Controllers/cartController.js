const cartService = require("../Services/cartService")


const getCartItem =async (req, res, next) => {
    // const { userId } = req.params
    try {
        const gotCartItems =await cartService.getAllCartItems()
        if (!gotCartItems || gotCartItems.length === 0) {
            return res.status(404).json({message:'Not Found the Cart Items'})
        }
        return res.status(200).json(gotCartItems)
    } catch (err) {
        next(err)
    }
}

const setCartItems = async (req, res, next) => {
    try {
        const { productId, quantity, price, userId } = req.body;
        if (!userId || !productId || !quantity || !price) {
            return res.status(400).json({ message: "All fields (userId, productId, quantity, price) are required." });
        }
        const setItemsToCart = await cartService.setNewCartItem(req.body)
        res.status(201).json(setItemsToCart)
    } catch (err) {
        next(err)
    }
    
}


const deleteCart = async(req,res,next) => {
    try {
        const { productId, userId } = req.body; 
        if (!productId || !userId) {
            return res.status(400).json({ message: "Product ID and User ID are required for remove cart" });
        }
        const deletedItem = await cartService.removeCartItem(productId, userId);
        return res.status(200).json({ message: "Cart item removed successfully", deletedItem });
    } catch (err) {
        next(err);
    }
}

module.exports = {getCartItem,setCartItems,deleteCart}