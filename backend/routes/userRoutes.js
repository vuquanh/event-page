import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { authUser, getUserProfile } from '../controllers/userController.js'




const router = express.Router()


//@desc Authenticate user and generate token
//@route POST /api/users/login
//@access public
router.post('/login', authUser)

//@desc Get user profile
//@route GET /api/users/profile
//@access private
router.route('/profile').get(protect, getUserProfile)


export default router