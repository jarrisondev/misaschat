import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

function getUser (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, (err, decoded) => {
      if (decoded) {
        connectDB() //
          .then(() => UserModel.findById(decoded.id))
          .then((user) => {
            res.status(200).json({ name: user.name, id: user._id })
          })
          .catch(() => {
            res.status(401).json({ message: 'error in the get user' })
          })
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  }
}

export default getUser
