const express = require('express')
const { getAllOrder, addOrder, getOrderById, removeOrder } = require('../Controllers/orderController')
const orderRouter = express.Router()

//routes for order

app.get('/allOrder', getAllOrder)
app.post('/pushOrder', addOrder)
app.get('/:userId/items', getOrderById)
app.post('/removeOrder', removeOrder)

module.exports={orderRouter}
