import asyncHandler from 'express-async-handler'
import Event from "../models/eventModel.js"

const getEvents = asyncHandler(async(req, res) => {//have to wrap in asyncHandler function bc Express is an old library that doesnt have async/await capabilities
    const events = await Event.find({}) //Event refers to events collection in MongoDB
    res.json(events)
})


const getEventbyId = asyncHandler(async(req, res) => {
    const event = await Event.findById(req.params.id)
    if (event) {
    res.json(event)
  } else {
    res.status(404)
    throw new Error('Product not found') //check later
  } 
})


export {getEvents, getEventbyId}