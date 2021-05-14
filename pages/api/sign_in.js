import userModel from '../../mongoDB/models/user.model'
import { connection } from 'mongoose'
import { connectDB } from '../../mongoDB/connect'
connectDB()

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { username } = JSON.parse(req.body)

		if (await userModel.findOne({ username })) {
			res.json({ username })
		}

		await connection.close()
	}
}
