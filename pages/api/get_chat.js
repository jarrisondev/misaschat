import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import ChatModel from 'mongoDB/models/chat.model'
import { connection } from 'mongoose'

export default function getChat (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)
    const contact = req.query

    verify(tokenUser, process.env.JWT_SIGN, (err, decoded) => {
      if (decoded) {
        connectDB()
          .then(() =>
            ChatModel.findOne({
              $or: [
                { users: [contact.id, decoded.id] },
                { users: [decoded.id, contact.id] }
              ]
            })
          )
          .then((chat) => {
            if (!chat) {
              const newChat = new ChatModel({
                contactName: contact.name,
                users: [decoded.id, contact.id],
                messages: []
              })
              newChat.save()
                .then((chat) => {
                  connection.close().then(() => console.log('database closed'))
                  res.status(201).json(chat)
                })
            } else {
              connection.close().then(() => console.log('database closed'))
              res.status(201).json(chat)
            }
          })
          .catch(() => res.status(400).json({ message: 'Something is wrong' }))
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  }
}
