const express = require('express')
const { getProducts, addNewProduct, modifyProduct, readProduct, deleteProduct } = require('../Controllers/ProductController')
const productRouter = express.Router()

//routes for product
productRouter.get('/Products', getProducts)
productRouter.get('/:id',readProduct)
productRouter.post('/addProduct', addNewProduct)
productRouter.patch('/updateProduct', modifyProduct)
productRouter.delete('/:id',deleteProduct)



module.exports ={productRouter}