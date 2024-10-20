const express = require('express')
const { getProducts, addNewProduct, modifyProduct, readProduct, deleteProduct } = require('../Controllers/ProductController')
const productRouter = express.Router()

//routes for product
productRouter.get('/Products', getProducts)
productRouter.get('/product/:id',readProduct)
productRouter.post('/product/addProduct', addNewProduct)
productRouter.put('/product/updateProduct', modifyProduct)
productRouter.delete('/deleteProduct/:id',deleteProduct)



module.exports ={productRouter}