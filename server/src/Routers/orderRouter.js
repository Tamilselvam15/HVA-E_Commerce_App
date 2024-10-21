const express = require('express')
const { getAllOrder, addOrder, getOrderById, removeOrder } = require('../Controllers/orderController')
const orderRouter = express.Router()

//routes for order

orderRouter.get('/allOrder', getAllOrder)
orderRouter.post('/pushOrder', addOrder)
orderRouter.get('/:userId', getOrderById)
orderRouter.delete('/removeOrder', removeOrder)

module.exports={orderRouter}
