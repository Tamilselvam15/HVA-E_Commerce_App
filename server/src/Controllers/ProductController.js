const  ProductService  = require("../Services/ProductService");

//get Product Controller
const getProducts = async (req, res, next) => {
    try{
        const products = await ProductService.getAllProductsFromDB()
        return res.status(200).json(products);
    } catch (err) {
        next(err);
    } 
}

//read Product Controller
const readProduct = async (req, res, next) => {
    const Id = req.params._id;
    console.log(`Received request for product ID: ${Id}`);
    console.log(typeof(Id))
    try {
        const ProductDetails = await ProductService.readDetailsOfProduct(Id)
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

        const newProduct =await ProductService.addProduct(
            id,title, description, category, price, discountPercentage, rating, stock,
            tags, sku, weight, dimensions, warrantyInformation, shippingInformation,
            availabilityStatus,returnPolicy,minimumOrderQuantity,images,thumbnail
        );
       
        return res.status(201).json(newProduct);
    } catch (err) {
        next(err)
    }
}

//updateProduct contoller
const modifyProduct = async (req, res, next) => {
    const id = req.params._id; 
    const updatedData = {...req.body}; 
    console.log(id)
    console.log(updatedData)

    try {
        const updatedProduct = await ProductService.updateProductToDB(id, updatedData); 
        console.log(updatedProduct)
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product Not Found' });
        }
        return res.status(200).json(updatedProduct);
    } catch (err) {
        next(new Error('Error updating product: ' + err.message));
    }
};

//remove Product
const deleteProduct = (req,res,next) => {
    const  id  = req.params._id;
    console.log(id)
    try {
        const deletedProduct = ProductService.delete(id)
        if (!deletedProduct) {
            return res.status(404).json({message:'the product is not found'})
        }
        return res.status(200).json({message:'Successfully deleted the Item'})
    } catch (err) {
        next(err)
    }
}



module.exports = {getProducts,addNewProduct,modifyProduct,readProduct,deleteProduct}