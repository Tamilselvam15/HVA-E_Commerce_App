const mongoose = require('mongoose');

const order = new mongoose.Schema({
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
    orderDate: { type: String, required: true }
});


const Order = mongoose.model('Order', order);

module.exports = Order;