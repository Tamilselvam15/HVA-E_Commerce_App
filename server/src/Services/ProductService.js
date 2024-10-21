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
          const findProductDetail = await Product.findOne({id:id})
          console.log(findProductDetail)
          if (!findProductDetail) {
              throw new Error("Product not found");
          }
          return findProductDetail
        } catch (err) {
        throw new Error('Error read the product Details'+err.message)
        }   
    },
      

    //addService
    addProduct: async (
            id,title, description, category, price, discountPercentage, rating, stock,
            tags, sku, weight, dimensions, warrantyInformation, shippingInformation,
            availabilityStatus,returnPolicy,minimumOrderQuantity,images,thumbnail
    ) => {
        
        try {
            const newProduct = new Product(
                {
                    id: id, title: title, description: description, category: category, price: price,
                    discountPercentage: discountPercentage, rating: rating, stock: stock,
                    tags: tags, sku: sku, weight: weight, dimensions: dimensions,
                    warrantyInformation: warrantyInformation,
                    shippingInformation: shippingInformation,
                    availabilityStatus: availabilityStatus, returnPolicy: returnPolicy,
                    minimumOrderQuantity: minimumOrderQuantity, images: images, thumbnail: thumbnail
                }
            )
            return await newProduct.save()
        } catch (err) {
            throw new Error('Error product saving to the database :',err.message)
        }
    },

    //update Product service
    updateProductToDB: async (id,updatedData) => {
        try {
            const newUpdateProduct = await Product.findOneAndUpdate(
                { id: id },
                { $set: updatedData },
                 { new: true })
            if (!newUpdateProduct) {
                return null
            }
            return newUpdateProduct
        } catch (err) {
            throw new Error('Error updating product: ' + err.message);
        }  
    
    },

    //delete Service
    delete: async (ProductId) => {
        try {
            const remainingProduct = Product.findOneAndDelete({id:ProductId})
            if (!remainingProduct) {
                return null
            }
            return remainingProduct
        } catch (err) {
            throw new Error('Error Deleting product' + err.message);
            
        }
    }
}

module.exports =ProductService