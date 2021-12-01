import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

export default function getUsers (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, async (err, decoded) => {
      if (decoded) {
        try {
          await connectDB()
          const allUsers = await UserModel.find({})
          const allUsersFilter = allUsers
            .filter(({ id }) => id !== decoded.id)
            .map(({ name, id }) => ({ name, id }))

          res.status(200).json(allUsersFilter)
        } catch (err) {
          console.error(err)
          res.status(500).json({ message: 'Error in the get user' })
        }
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  } else {
    res.status(401).json({ message: 'Only GET method' })
  }
}
