import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs'

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body //this means both of these are being deconstructed from the body in one line
    const user = await User.findOne({email: email}) //we did find all, but now we want just one specific one. We are matching the email from the userModel to the user provided email. You can also write just 'email' if the above is the same word on both sides of the colon
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id, 
            name: user.name, 
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else {
        res.status(401)  //.json({message: 'Invalid email'}) this doesnt give user an error message
        throw new Error('Invalid email or password')
    }
    })

    const getUserProfile = asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id)
        if (user) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
          })
        } else {
          res.status(404)
          throw new Error('User not found')
        }
      })
      
      const updateUserProfile = asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id)
      
        if (user) {
          user.name = req.body.name || user.name
          user.email = req.body.email || user.email
          if (req.body.password) {
            user.password = req.body.password
          }
      
          const updatedUser = await user.save()
      
          res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
          })
        } else {
          res.status(404)
          throw new Error('User not found')
        }
      })
      const registerUser = asyncHandler(async (req, res) => {
        let { name, email, password } = req.body

        bcrypt.hashSync(password, 10)
  
      
        const userExists = await User.findOne({ email })
      
        if (userExists) {
          res.status(400)
          throw new Error('User already exists')
        }
      
        const user = await User.create({
          name,
          email,
          password,
        })
      
        if (user) {
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
          })
        } else {
          res.status(400)
          throw new Error('Invalid user data')
        }
      })
      
      export {authUser, getUserProfile, updateUserProfile, registerUser}

