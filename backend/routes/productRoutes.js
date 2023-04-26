import express from 'express'; 
import Product from '../models/productModel.js'; 

const router = express.Router() //express is a big library than can do a lot of things. We just want the Router function which takes the URL and executes the correct API

router.get('/', asyncHandler(async(req, res) => {//have to wrap in asyncHandler function bc Express is an old library that doesnt have async/await capabilities
    const products = await Product.find({}) //product refers to products collection in MongoDB
    res.json(products)
}))

router.get('/:id', asyncHandler(async (req, res) =>{
    const product = await Product.findById(req.params.id)
    if (product) {
    res.json(product)
  } else {
    res.status(404).json({message: 'Product not found'})
  } 
}))

export default router