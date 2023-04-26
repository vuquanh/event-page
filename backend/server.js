//everything we create in the backend needs to be connected here similar to how components in the front end are connected to the app.js file

import express from 'express';
import dotenv from 'dotenv';
//import events from './data/events.js';// Don't forget to add ".js" when importing files in the backend. Goes away when we connect to API
import productRoutes from '/.routes/productRoutes';
import connectDB from './config/db.js';


const app = express(); //as soon as server runs, this starts first
dotenv.config() //this command lets us have access to .env file
connectDB() //this will connect to database and will print out the host if there is a successful connection. test with npm run dev

app.use('api/products', productRoutes) // this says anytime you see products in a url, go to productRoutes.

/*** temporarily removing this code in clean up.  

app.get('/api/events', (req, res) => {
    res.json(events)//we are sending the events back to the client
}) 

app.get('/api/event/:id', (req, res) => {
    const event = events.find(e => e._id === req.params.id)//to get params you request and we want id
    res.json(event)//we are sending the event back
})*/

app.listen(5000, console.log ('server is running on port 5000'))
