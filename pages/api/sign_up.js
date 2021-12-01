import { genSalt, hash } from 'bcrypt'
import UserModel from 'mongoDB/models/user.model'
import { closeDB, connectDB } from 'mongoDB/connect'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    try {
      await connectDB()
      const userExists = await UserModel.find({ email })

      if (userExists.length !== 0) {
        res.status(406).json({ message: 'user already exists' })
      } else {
        const newUser = new UserModel({
          name,
          email: email.toLowerCase(),
          password: await hash(password, await genSalt(10))
        })
        await newUser.save()
        res.status(201).json({ message: 'user register successfully' })
      }
      await closeDB()
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Error in the sign Up' })
    }
  } else {
    res.status(401).json({ message: 'Only POST method' })
  }
}
