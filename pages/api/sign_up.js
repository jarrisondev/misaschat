import UserModel from '../../models/user.model'
import { connection } from 'mongoose'
import { connectDB } from '../../mongoDB/connect'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectDB()

		const { name, email, password } = req.body
		const result = await UserModel.find({ email })

		if (result.length === 0) {
			const newUser = new UserModel({
				name,
				email,
				password,
			})

			await newUser.save().then(async () => {
				await connection.close().then(() => console.log('database closed'))
				res.status(200).json({ message: 'user register successfully' })
			})
		} else {
			await connection.close().then(() => console.log('database closed'))
			res.status(406).json({ message: 'user already exists' })
		}
	} else {
		res.status(401).json({ message: 'Only POST method' })
	}
}
