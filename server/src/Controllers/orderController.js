const orderService = require("../Services/orderService")

//get all oreder from database
const getAllOrder =async (req, res, next) => {
    try {
        const orders = await orderService.getallOrderfromDB()
        if (!orders || orderService.length === 0) {
            return res.status(404).json({message:'Not Found the order Items'})
        }
        return res.status(200).json(orders)
    } catch (err) {
        next(err)
    }
}

//add  new order to the database
const addOrder = async (req, res, next) => {
    const {productId,userId,price,orderDate} =req.body
    try {
        const addedOrder = await orderService.addnewOrderToDB(productId,userId,price,orderDate)
        return res.status(201).json(addedOrder)
    } catch (err) {
        next(err)
    }
    
}

//get order details by userId

const getOrderById = async(req,res,next) => {
    try {
        const { userId } = req.params
        const searchedOrders = await orderService.viewOrderDetailsFromDB(userId)
        if (!searchedOrders || searchedOrders.length === 0) {
            return res.status(404).json({message:'not fond the user or userOrder'})
        }
        return res.status(200).json(searchedOrders)

    } catch (err) {
        next(err)
    }
}

//romove the order frome the database
const removeOrder =async(req, res, next) => {
    try {
        const {productId,userId } = req.body
        const removedItem = await orderService.removeOrderFromDB(productId,userId)
        if (!removedItem) {
            return res.status(404).json({message:'the order is not found'})
        }
        return res.status(200).json(removedItem)

    } catch (err) {
        next (err)
    }
}


module.exports ={getAllOrder,addOrder,getOrderById,removeOrder}