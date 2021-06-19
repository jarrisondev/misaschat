import {sign} from 'jsonwebtoken'
import UserModel from 'models/user.model'
import {connection} from 'mongoose'
import {connectDB} from 'mongoDB/connect'
import {compare} from 'bcrypt'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await connectDB()

		const {email, password} = req.body
		const user = (await UserModel.findOne({email: email.toLowerCase()})) || {
			password: '',
		}

		compare(password, user.password, async (err, result) => {
			if (result) {
				await connection.close().then(() => console.log('database closed'))
				const token = sign({id: user._id}, process.env.JWT_SIGN, {
					expiresIn: '31d',
				})
				res.status(200).json({token})
			} else {
				await connection.close().then(() => console.log('database closed'))
				res.status(401).json({message: 'Incorrect user or password', err})
			}
		})
	} else {
		res.status(401).json({message: 'Only POST method'})
	}
}
