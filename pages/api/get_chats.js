import { verify } from 'jsonwebtoken'
import ChatModel from 'mongoDB/models/chat.model'
import UserModel from 'mongoDB/models/user.model'
import { connectDB, closeDB } from 'mongoDB/connect'

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

          const chatsWithContactData = await Promise.all(
            chatsWithUser.map(async (chat) => {
              const [id] = chat.users.filter((id) => id !== decoded.id)
              const contactData = await UserModel.findById(id)

              return {
                _id: chat._id,
                users: chat.users,
                messages: chat.messages,
                contactName: contactData.name
              }
            })
          )

          res.status(200).json({
            chats: chatsWithContactData
          })
          await closeDB()
        } catch (err) {
          console.error(err)
          res.status(500).json({ message: 'error in the get chats' })
        }
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  } else {
    res.status(401).json({ message: 'Only GET method' })
  }
}
