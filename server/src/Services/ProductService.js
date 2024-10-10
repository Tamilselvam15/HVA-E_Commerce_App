const ProductDatabase = require('../DataBase/ProductDatabase')

const ProductService = {

    //getService
    getAll: async () => {
        return await ProductDatabase.getAllProductsFromDB()
    },

    //readService
    readDetailsOfProduct: async () => {
        return await ProductDatabase.readDetailsFromDB(id)
    },

    //addService
    addProduct: async (productData) => {
        return await ProductDatabase.addProductToDB(productData)
    },

    //updateService
    updateProduct: async (productId,updatedData) => {
        return await ProductDatabase.updateProductToDB(productId,updatedData)
    }

    //
}

module.exports ={ProductService,addProduct}