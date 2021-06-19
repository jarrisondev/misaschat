import UserModel from '../../models/user.model'
import {connection} from 'mongoose'
import {connectDB} from '../../mongoDB/connect'
import {genSalt, hash} from 'bcrypt'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await connectDB()

		const {name, email, password} = req.body
		const result = await UserModel.find({email})

		if (result.length === 0) {
			const salt = await genSalt(10)
			const newUser = new UserModel({
				name,
				email: email.toLowerCase(),
				password: await hash(password, salt),
			})

			await newUser.save().then(async () => {
				await connection.close().then(() => console.log('database closed'))
				res.status(201).json({message: 'user register successfully'})
			})
		} else {
			await connection.close().then(() => console.log('database closed'))
			res.status(406).json({message: 'user already exists'})
		}
	} else {
		res.status(401).json({message: 'Only POST method'})
	}
}
