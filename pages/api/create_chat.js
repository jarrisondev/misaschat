import { verify } from 'jsonwebtoken'
import { connection } from 'mongoose'
import { connectDB } from 'mongoDB/connect'
import ChatModel from 'mongoDB/models/chat.model'

export default function getChat (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)
    const contact = req.query

    verify(tokenUser, process.env.JWT_SIGN, (err, decoded) => {
      if (decoded) {
        connectDB()
          .then(() => {
            const newChat = new ChatModel({
              names: [contact.name, decoded.name],
              users: [decoded.id, contact.id],
              messages: []
            })
            newChat
              .save() //
              .then((chat) => {
                connection
                  .close() //
                  .then(() => console.log('database closed'))
                res.status(201).json(chat)
              })
          })
          .catch(() =>
            res
              .status(400)
              .json({ message: 'Connection or create new Model failed' })
          )
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  }
}
