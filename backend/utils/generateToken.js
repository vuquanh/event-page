import jwt from 'jsonwebtoken'

export const generateToken = (id) => { //sign is a function available from library. using one name instead of id:id.
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}


