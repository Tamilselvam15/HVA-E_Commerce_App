const Order = require("../Models/orderModel")

const orderService = {
    //get all order service
    getallOrderfromDB: async() => {
        try {
            const getAllOrderlist = await Order.find() 
            if (!getAllOrderlist || getAllOrderlist.length === 0) {
                return []
            }
            return getAllOrderlist
        } catch (err) {
            throw new Error('Error get Order')
        }
        
    },


    //add new order to database
    addnewOrderToDB: async(productId,userId,price,orderDate) => {
        try {
            const newOrder = new Order(productId, userId, price, orderDate)
            return await Order.save()
        } catch (err) {
            throw new Error('Error add order Items :' + err.message)
        }
    },


    //view order by id
    viewOrderDetailsFromDB:async (userId) => {
        try {
            const orderDetail = await Order.findById(userId)
            if (!orderDetail) {
                return 'cannot find the order details'
            }
            return orderDetail
        } catch (err) {
            throw new Error ('Error find order Details' +err.message)
        }
    },


    //remove order by userid
    removeOrderFromDB: async(userId,productId) => {
        try {
            const removeOrder = await Order.findByIdAndDelete(userId,productId)
            if (!removeOrder) {
                return 
            }
            return removeOrder
        } catch (err) {
            throw new Error('Error remove Order')
        }
    }
}

module.exports =orderService