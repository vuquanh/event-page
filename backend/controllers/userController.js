import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';

export const authUser = asyncHandler(async (req, res) => {
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

    export const getUserProfile = asyncHandler(async (req, res) => {
        res.json({message: 'success'})
      })

