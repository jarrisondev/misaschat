import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { connection } from 'mongoose'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

export default function handler (req, res) {
  if (req.method === 'POST') {
    const { email, password = '' } = req.body

    connectDB()
      .then(() => UserModel.findOne({ email: email.toLowerCase() }))
      .then((user) => {
        if (!user) {
          res.status(401).json({ message: 'Incorrect user or password' })
        }
        connection
          .close() //
          .then(() => console.log('database closed'))
        return user
      })
      .then((user) => {
        compare(password, user.password, (err, result) => {
          if (result) {
            const token = sign({ id: user._id }, process.env.JWT_SIGN, {
              expiresIn: '31d'
            })
            res.status(200).json({ token })
          } else {
            res.status(401).json({ message: 'Incorrect user or password', err })
          }
        })
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }))
  } else {
    res.status(401).json({ message: 'Only POST method' })
  }
}
