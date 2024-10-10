const Product = require("../Models/productModel")

//get product Db
const getAllProductsFromDB = async () => {
    return await Product.find()
}

//read product Db
const readDetailsFromDB = async (id) => {
    try {
        const findProductDetail = Product.findById(id)
        if (!findProductDetail) {
            return "cannot read the details of the product"
        }
        return findProductDetail
    } catch (err) {
        throw new Error('Error read the product Details'+err.message)
    }
}

//Add product 
const addProductToDB = async (productData) => {
    try {
        const newProduct = new Product(productData)
        return await newProduct.save()
    } catch (err) {
        throw new Error('Error product saving to the database :',err.message)
    }
}

//updateProduct Db
const updateProductToDB = async (ProductId, updatedData) => {
    try {
        const newUpdateProduct = Product.findByIdAndUpdate(ProductId, updatedData, { new: true })
        if (!newUpdateProduct) {
            return null
        }
        return updateProductToDB
    } catch (err) {
        throw new Error('Error updating product: ' + err.message);
    }  
    
}

module.exports = { getAllProductsFromDB }

