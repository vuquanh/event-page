import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }, 
}, {
    timestamps: true    
})

//anyone that uses this model will have this method available to call (benefit of putting here instead of userController)
userSchema.methods.matchPassword = async function
(enteredPassword) {
   return bcrypt.compare(enteredPassword, this.password) //this is current schema         
}

const User = mongoose.model('users', userSchema)
export default User