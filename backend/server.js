//everything we create in the backend needs to be connected here similar to how components in the front end are connected to the app.js file

import express from 'express';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';

const app = express(); //as soon as server runs, this starts first
dotenv.config() //this command lets us have access to .env file
connectDB() //this will connect to database and will print out the host if there is a successful connection. test with npm run dev

//here
app.use('/api/events', eventRoutes)

app.use(errorHandler)
app.listen(5000, console.log('server is running on port 5000'))

