import express from 'express'; 
import asyncHandler from 'express-async-handler'
import Events from '../models/eventModel.js'; 

const router = express.Router() //express is a big library than can do a lot of things. We just want the Router function which takes the URL and executes the correct API

router.get('/', asyncHandler(async (req, res) => {//have to wrap in asyncHandler function bc Express is an old library that doesnt have async/await capabilities
    const events = await Events.find({}) //product refers to products collection in MongoDB
    res.json(events)
}))

router.get('/:id', asyncHandler(async (req, res) =>{
    const event = await Events.findById(req.params.id)
    if (event) {
    res.json(event)
  } else {
    res.status(404).json({message: 'Event not found'})
  } 
}))

export default router