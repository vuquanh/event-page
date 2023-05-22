import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
    const { 
        orderItems,
        shippingAddress,
        paymentMethod, 
        itemsFee,
        taxPrice, 
        shippingPrice, 
        totalPrice
    } = req.body //deconstructing order items

if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
} else {//when youre about to write an order we create a new instance of the order model
    const order = new Order ({
        orderItems, 
        user: req.user._id,
        shippingAddress, 
        paymentMethod, 
        itemsFee, 
        taxPrice, 
        shippingPrice, 
        totalPrice
    })
    const createdOrder = await order.save() //creates a new record into mongoDb
    res.status(201).json(createdOrder) //201 means created
    }
})

const getOrderById = asyncHandler(async( req, res) => {
    const order = await Order.findById(req.params.id).populate( //use populate command to go to relationship and read info. This reads from user column and returns name and email
        'user', 
        'name email'
    ) 
    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

const updateOrderToPaid = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)
    if (order){
        order.isPaid = true, //marks column as true
        order.paidAt = Date.now()
        order.paymentResult = { //info get from paypal
            id: req.body.orderID,
        }

        const updatedOrder = await order.save()
        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

export {addOrderItems, getOrderById, updateOrderToPaid}
