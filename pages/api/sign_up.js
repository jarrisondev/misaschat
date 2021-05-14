import userModel from '../../mongoDB/models/user.model'
import { connection } from 'mongoose'
import { connectDB } from '../../mongoDB/connect'
connectDB()

export default async function handler(req, res) {
	if (req.method === 'POST') {
		let data = req.body
		console.log(data)
	} else {
		res.status(200).json({ message: 'Only POST method' })
	}
	connection.close()
}
