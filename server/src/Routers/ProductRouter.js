const express = require('express')
const { getProducts, addNewProduct, modifyProduct, readProduct, deleteProduct } = require('../Controllers/ProductController')
const { validateFields, validateParams } = require('../middleware/checkProduct')
const { productValidationSchema,productIdSchema, updateProductSchema } = require('../Validation/productValidation')
const productRouter = express.Router()

//get all products
productRouter.get('/Product', getProducts) //ok

//get product by Id
productRouter.get('/Product/:_id',
    validateParams(productIdSchema),
    readProduct)

//add product
productRouter.post('/Product',
    validateFields(productValidationSchema),
    addNewProduct)

//update product details
productRouter.patch('/Product/:_id',
     validateParams(productIdSchema),
    validateFields(updateProductSchema),
    modifyProduct)

//delete the product by id
productRouter.delete('/Product/:_id',
    validateParams(productIdSchema),
    deleteProduct)




module.exports ={productRouter}