import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

function getUser (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, async (err, decoded) => {
      if (decoded) {
        try {
          await connectDB()
          const user = await UserModel.findById(decoded.id)
          res.status(200).json({ name: user.name, id: user._id })
        } catch (err) {
          console.error(err)
          res.status(401).json({ message: 'error for get the user' })
        }
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  }
}

export default getUser
