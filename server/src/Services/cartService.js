const Cart = require("../Models/cartModels")

const cartService = {
    //getcart sevice
    getAllCartItems : async () => {
         try {
            const all = await Cart.find()
            if (!all ||all.length === 0) {
               return []
            }
            return all
         } catch (err) {
            console.error("Error getting cart items:", err.message);
            throw new Error('Error get product')
        }
    },

    //post new cart items service
    setNewCartItem: async (cartItemData) => {
        
        try {
            console.log("Cart item data:", cartItemData);
            const newCartItem = new Cart(cartItemData); 
            const savedItem = await newCartItem.save(); 
            return savedItem;
        } catch (err) {
            console.error("Error saving cart item:", err.message);
            throw new Error('Error saving new cart item');
        }
    },


    //delete car service
    removeCartItem: async (productId, userId) => {
        try {
            const deletedItem = await Cart.findOneAndDelete({ productId: productId, userId: userId });
            if (!deletedItem) {
                throw new Error('Cart item not found');
            }
            return deletedItem;
        } catch (err) {
            console.error("Error removing cart item:", err.message);
            throw new Error('Error removing cart item');
        }
    }
}

module.exports =cartService

