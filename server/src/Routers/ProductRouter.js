const express = require('express')
const { getProducts, addNewProduct, modifyProduct, readProduct } = require('../Controllers/ProductController')
const productRouter = express.Router()

//routes for product
productRouter.get('/Products', getProducts)
productRouter.get('/product',readProduct)
productRouter.post('/addProduct', addNewProduct)
productRouter.put('/updateProduct',modifyProduct)



module.exports ={productRouter}