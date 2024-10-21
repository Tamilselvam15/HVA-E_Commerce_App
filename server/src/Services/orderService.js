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
            const newOrder = new Order({ productId: productId, userId:userId, price:price, orderDate:orderDate })
            return await newOrder.save()
        } catch (err) {
            throw new Error('Error add order Items :' + err.message)
        }
    },


    //view order by id
    viewOrderDetailsFromDB:async (userId) => {
        try {
            const orderDetail = await Order.find({userId:userId})
            if (!orderDetail) {
                return 'cannot find the order details'
            }
            return orderDetail
        } catch (err) {
            throw new Error ('Error find order Details' +err.message)
        }
    },


    //remove order by userid
    removeOrderFromDB: async(productId,userId) => {
        try {
            const removeOrder = await Order.findOneAndDelete({userId:userId,productId:productId})
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