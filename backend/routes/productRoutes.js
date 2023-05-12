import express from 'express'; 
import { getEventbyId, getEvents } from '../controllers/eventController.js';

const router = express.Router() //express is a big library than can do a lot of things. We just want the Router function which takes the URL and executes the correct API


//@desc Fetch all products
//@route GET /api/products
//@access public
router.get('/', getEvents)

//@desc Fetch a single product by id
//@route GET /api/products/:id
//@access public
router.get('/:id', getEventbyId)

export default router