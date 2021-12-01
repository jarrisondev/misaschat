import { verify } from 'jsonwebtoken'
import UserModel from 'mongoDB/models/user.model'
import { closeDB, connectDB } from 'mongoDB/connect'

function getContact (req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    const { authorization } = req.headers
    const tokenUser = authorization.substring(7)

    verify(tokenUser, process.env.JWT_SIGN, async (err, decoded) => {
      if (decoded && id) {
        try {
          await connectDB()
          const contact = await UserModel.findById(id)

          if (contact) {
            res.status(200).json({ name: contact.name, id: contact.id })
          } else {
            res.status(404).json({ message: 'error in the get contact' })
          }

          await closeDB()
        } catch (err) {
          console.error(err)
          res.status(404).json({ message: 'error in the get contact' })
        }
      } else {
        res.status(401).json({ message: 'Unauthorized', err })
      }
    })
  }
}

export default getContact
