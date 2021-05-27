import userModel from '../../models/user.model'
import { connection } from 'mongoose'
import { connectDB } from '../../mongoDB/connect'
import { compare } from 'bcrypt'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectDB()
		const { email, password } = req.body
		const result = await userModel.find({ email })

		if (result.length === 1) {
			const userPassword = result[0].password

			compare(password, userPassword, (err, token) => {
				if (token) {
					res.status(200).json({
						name: result[0].name,
						email: result[0].email,
						password: '',
					})
				} else {
					res.status(401).json({ message: 'Incorrect password', err })
				}
			})
			await connection.close().then(() => console.log('database closed'))
		} else {
			res.status(401).json({ message: 'Incorrect user' })
			await connection.close().then(() => console.log('database closed'))
		}
	} else {
		res.status(401).json({ message: 'Only POST method' })
	}
}
