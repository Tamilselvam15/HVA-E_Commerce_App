const mongoose = require('mongoose');

const orderSchema = new mongoose.schema({
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
    orderDate:{type:String ,required:true}
})


const Order = mongoose.model('Order', orderSchema)
module.exports = Order;