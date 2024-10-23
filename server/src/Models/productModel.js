const mongoose = require('mongoose');



const dimensionsSchema = new mongoose.Schema({
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    depth: { type: Number, required: true }
}, { _id: false });



const productSchema = new mongoose.Schema({
    // id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
    tags: { type: [String], required: true },
    sku: { type: String, required: true },
    weight: { type: Number, required: true },
    dimensions: { type: dimensionsSchema, required: true },
    warrantyInformation: { type: String, required: true },
    shippingInformation: { type: String, required: true },
    availabilityStatus: { type: String, required: true },
    returnPolicy: { type: String, required: true },
    minimumOrderQuantity: { type: Number, required: true },
    images: { type: [String], required: true },
    thumbnail: { type: String, required: true }
});

// Create the model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
