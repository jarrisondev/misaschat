import { verify } from 'jsonwebtoken'
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
            ChatModel.findOne({
              $or: [
                { users: [contact.id, decoded.id] },
                { users: [decoded.id, contact.id] }
              ]
            }) //
              .then((chats) => {
                if (!chats) {
                  const newChat = new ChatModel({
                    names: [contact.name, decoded.name],
                    users: [decoded.id, contact.id],
                    messages: []
                  })
                  newChat
                    .save() //
                    .then((chat) => {
                      res.status(201).json(chat)
                    })
                } else {
                  res.status(201).json(chats)
                }
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
