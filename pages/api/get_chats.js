import { verify } from 'jsonwebtoken'
import ChatModel from 'mongoDB/models/chat.model'
import { closeDB, connectDB } from 'mongoDB/connect'

export default function getContacts (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, async (err, decoded) => {
      if (decoded) {
        try {
          await connectDB()
          const chats = await ChatModel.find({})
          const chatsWithUser = chats.filter((chat) =>
            chat.users.includes(decoded.id)
          )

          res.status(200).json({
            chats: chatsWithUser
          })
        } catch (err) {
          console.error(err)
          res.status(500).json({ message: 'error in the get chats' })
        }
        await closeDB()
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  } else {
    res.status(401).json({ message: 'Only GET method' })
  }
}
