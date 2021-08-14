import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

export default function getUsers (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, (err, decoded) => {
      if (decoded) {
        connectDB()
          .then(() => UserModel.find({}))
          .then((users) => {
            res
              .status(200)
              .json(
                users
                  .filter((user) => decoded.id !== user.id)
                  .map(({ name, id }) => ({ name, id }))
              )
          })
          .catch(() =>
            res.status(500).json({ message: 'Internal Server Error' })
          )
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  } else {
    res.status(401).json({ message: 'Only GET method' })
  }
}
