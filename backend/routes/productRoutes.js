import express from 'express'; 
import { getEventById, getEvents } from '../controllers/eventController.js';



const router = express.Router() //express is a big library than can do a lot of things. We just want the Router function which takes the URL and executes the correct API

//*anytime we write routes, write comments
//@desc     Fetch all events
//@route    GET /api/events/
//@access   public
router.get('/', getEvents)

//@desc     Fetch single events by id
//@route    GET /api/products/:id
//@access   public
router.get('/:id', getEventById)

export default router