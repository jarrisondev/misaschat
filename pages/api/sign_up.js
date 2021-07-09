import { connection } from 'mongoose'
import { genSalt, hash } from 'bcrypt'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

export default function handler (req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    connectDB()
      .then(() => UserModel.find({ email }))
      .then(async (result) => {
        if (result.length === 0) {
          const newUser = new UserModel({
            name,
            email: email.toLowerCase(),
            password: await hash(password, await genSalt(10))
          })
          newUser.save().then(() => {
            connection.close().then(() => console.log('database closed'))
            res.status(201).json({ message: 'user register successfully' })
          })
        } else res.status(406).json({ message: 'user already exists' })
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }))
  } else {
    res.status(401).json({ message: 'Only POST method' })
  }
}
