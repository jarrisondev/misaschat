import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import UserModel from 'mongoDB/models/user.model'
import { closeDB, connectDB } from 'mongoDB/connect'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const { email, password = '' } = req.body

    try {
      await connectDB()
      const user = await UserModel.findOne({ email: email.toLowerCase() })

      if (!user) res.status(401).json({ message: 'Incorrect user or password' })
      else {
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
      }
      await closeDB()
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Error in the login' })
    }
  } else {
    res.status(401).json({ message: 'Only POST method' })
  }
}
