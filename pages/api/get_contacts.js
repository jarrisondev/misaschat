import { connection } from 'mongoose'
import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

export default function getUsers (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const token = authorization.substring(7)

    const isvalidate = verify(token, process.env.JWT_SIGN)

    if (isvalidate) {
      connectDB()
        .then(() => UserModel.find({}))
        .then((users) => {
          connection.close().then(() => console.log('database closed'))

          res.status(200).json(
            users
              .filter((user) => isvalidate.id !== user.id)
              .map(({ name, email }) => ({ name, email }))
          )
        })
        .catch(() => res.status(500).json({ message: 'Internal Server Error' }))
    } else {
      res.status(401).json({ message: 'Unauthorized', err: true })
    }
  } else {
    res.status(401).json({ message: 'Only GET method' })
  }
}
