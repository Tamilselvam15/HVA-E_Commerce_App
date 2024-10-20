// const ProductDatabase = require('../DataBase/ProductDatabase')
const Product = require('../Models/productModel')

const ProductService = {

    //getService
   
    getAllProductsFromDB: async () => {
        try {
            const all = await Product.find()
            if (!all ||all.length === 0) {
               return []
            }
            return all
        } catch (err) {
            throw new Error('Error get product')
        }
   
    },

    //readService
    readDetailsOfProduct: async (id) => {
       try {
          const findProductDetail = await Product.findById(id)
          console.log(findProductDetail)
          if (!findProductDetail) {
              return "cannot read the details of the product"
          }
          return findProductDetail
        } catch (err) {
        throw new Error('Error read the product Details'+err.message)
        }   
    },
      

    //addService
    addProduct: async (productData) => {
        try {
            const newProduct = new Product(productData)
            return await newProduct.save()
        } catch (err) {
            throw new Error('Error product saving to the database :',err.message)
        }
    },

    //update Product service
    updateProductToDB : async (ProductId, updatedData) => {
        try {
            const newUpdateProduct = Product.findByIdAndUpdate(ProductId, updatedData, { new: true })
            if (!newUpdateProduct) {
                return null
            }
            return updateProductToDB
        } catch (err) {
            throw new Error('Error updating product: ' + err.message);
        }  
    
    },

    //delete Service
    delete: async (ProductId) => {
        try {
            const remainingProduct = Product.findByIdAndDelete(ProductId)
            if (!remainingProduct) {
                return
            }
            return remainingProduct
        } catch (err) {
            throw new Error('Error Deleting product' + err.message);
            
        }
    }
}

module.exports =ProductService