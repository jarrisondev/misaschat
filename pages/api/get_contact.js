import { verify } from 'jsonwebtoken'
import { connectDB } from 'mongoDB/connect'
import UserModel from 'mongoDB/models/user.model'

function getContact (req, res) {
  if (req.method === 'GET') {
    const contactId = req.query
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, async (err, decoded) => {
      if (decoded) {
        await connectDB()
        const contact = await UserModel.findById(contactId)
        if (contact) { res.status(200).json({ name: contact.name, id: contact.id }) } else res.status(404).json({ message: 'error in the get user' })
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  }
}

export default getContact
