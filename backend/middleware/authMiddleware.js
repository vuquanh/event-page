import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get the user data except password and save it to req.user
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
        res.status(401)
        throw new Error('Not authroized, no token')
    }
  }
});

export {protect}