import UserModel from '../../mongoDB/models/user.model'
import { connection } from 'mongoose'
import { connectDB } from '../../mongoDB/connect'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectDB()

		let { name, email, password } = req.body

		const newUser = new UserModel({
			name,
			email,
			password,
		})

		await newUser.save().then(() => {
			res.status(200).json()
			connection.close()
		})
	} else {
		res.status(401).json({ message: 'Only POST method' })
	}
}
