const express = require('express')
const { getCartItem, setCartItems, deleteCart } = require('../Controllers/cartController')
const cartRouter = express.Router()

//Routes for cart

cartRouter.get('/cartItems', getCartItem)
cartRouter.post('/addToCart', setCartItems)
cartRouter.delete('/removeFromCart',deleteCart)


module.exports ={cartRouter}