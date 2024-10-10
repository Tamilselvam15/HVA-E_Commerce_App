const { ProductService } = require("../Services/ProductService");


//get Product Controller
const getProducts = async (req, res, next) => {
    try{
        const products = await ProductService.getAll()
        return res.status(200).json(products);
    } catch (err) {
        next(err);
    }
    
   
}

//read Product Controller
const readProduct = async (req, res, next) => {
    const {id}=req.params.id
    try {
        const ProductDetails = await ProductService.readDetailsOfProduct(id)
        return res.status(200).json(ProductDetails)
    } catch (err) {
        next(new Error('cannot Read the product Detail'+err))
    }
}


//add controller
const addNewProduct = async (req, res, next) => {
    try {
        //destructuring the data
        const {
            id,title, description, category, price, discountPercentage, rating, stock,
            tags, sku, weight, dimensions, warrantyInformation, shippingInformation,
            availabilityStatus,returnPolicy,minimumOrderQuantity,images,thumbnail
        } = req.body

        const newProduct = await ProductService.addProduct({ 
            id,title, description, category, price, discountPercentage, rating, stock,
            tags, sku, weight, dimensions, warrantyInformation, shippingInformation,
            availabilityStatus,returnPolicy,minimumOrderQuantity,images,thumbnail
        });
        res.status(201).json(newProduct);
    } catch (err) {
        next(err)
    }
}

//updateProduct contoller
const modifyProduct = async (req, res, next) => {
    const {productId,updatedData} = req.body
    try {
        const updatedProduct = ProductService.updateProduct(productId, updatedData)
        if (!updatedProduct) {
           return res.status(404).json({message:'meaasge Not Found'})
        }
        return res.status(200).json(updatedProduct);
    } catch (err) {
        next( new Error('Error update product'+err.message))
    }
}

module.exports = {getProducts,addNewProduct,modifyProduct,readProduct}