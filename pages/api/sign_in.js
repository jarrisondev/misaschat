import userModel from '../../models/user.model'
import { connection } from 'mongoose'
import { connectDB } from '../../mongoDB/connect'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectDB()
		const { email, password } = req.body
		const result = await userModel.find({ email, password })

		if (result.length === 1) {
			res
				.status(200)
				.json({ name: result[0].name, email: result[0].email, password: null })
			await connection.close().then(() => console.log('database closed'))
		} else {
			res.status(406).json({ message: 'Incorrect user' })
			await connection.close().then(() => console.log('database closed'))
		}
	} else {
		res.status(401).json({ message: 'Only POST method' })
	}
}
