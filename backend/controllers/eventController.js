import Event from '../models/eventModel.js'; 
import asyncHandler from 'express-async-handler';

//the routes were moved from the productRoutes file into this file as industry best practice. Routes will be small file, controllers folder will have the route logic

export const getEvents = asyncHandler(async(req, res) => {//have to wrap in asyncHandler function bc Express is an old library that doesnt have async/await capabilities
    const events = await Event.find({}) //product refers to products collection in MongoDB
    console.log(events)
    res.json(events)
})

export const getEventById = asyncHandler(async(req, res) => {
    const event = await Event.findById(req.params.id)
    if (event) {
    res.json(event)
  } else {
    res.status(404)
    throw new Error('Product not found')
  } 
})

