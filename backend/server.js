//everything we create in the backend needs to be connected here similar to how components in the front end are connected to the app.js file

import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js';

const app = express(); //as soon as server runs, this starts first
dotenv.config() //this command lets us have access to .env file
connectDB() //this will connect to database and will print out the host if there is a successful connection. test with npm run dev

app.use(express.json())
app.use('/api/events', productRoutes) // this says anytime you see products in a url, go to productRoutes.
app.use('/api/users', userRoutes) 


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));