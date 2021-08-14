import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import ChatModel from 'mongoDB/models/chat.model'

export default function getContacts (req, res) {
  if (req.method === 'GET') {
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, (err, decoded) => {
      if (decoded) {
        connectDB()
          .then(() => ChatModel.find({}))
          .then((chats) => {
            const response = chats.filter((chat) =>
              chat.users.includes(decoded.id)
            )
            res.status(200).json({
              chats: response
            })
          })
          .catch(() =>
            res.status(500).json({ message: 'Internal Server Error' })
          )
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  } else {
    res.status(401).json({ message: 'Only GET method' })
  }
}
