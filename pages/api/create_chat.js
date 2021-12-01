import { verify } from 'jsonwebtoken'
import ChatModel from 'mongoDB/models/chat.model'
import { closeDB, connectDB } from 'mongoDB/connect'

export default function createChat (req, res) {
  if (req.method === 'GET') {
    const contact = req.query
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, async (err, decoded) => {
      if (decoded) {
        try {
          await connectDB()
          const chatWithUser = await ChatModel.findOne({
            $or: [
              { users: [contact.id, decoded.id] },
              { users: [decoded.id, contact.id] }
            ]
          })

          if (chatWithUser) {
            res.status(201).json(chatWithUser)
          } else {
            const newChat = new ChatModel({
              users: [decoded.id, contact.id],
              messages: []
            })

            await newChat.save()
            res.status(201).json(newChat)
          }
          await closeDB()
        } catch (err) {
          console.error(err)
          res.status(400).json({ message: 'Error in the create chat' })
        }
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  }
}
