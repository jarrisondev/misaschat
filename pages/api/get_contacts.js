import {connectDB} from 'mongoDB/connect'
import UserModel from 'models/user.model'
import {connection} from 'mongoose'
import {verify} from 'jsonwebtoken'

export default async function getUsers(req, res) {
	if (req.method === 'GET') {
		const {authorization} = req.headers
		const token = authorization.substring(7)

		verify(token, process.env.JWT_SIGN, async (err, result) => {
			if (result) {
				connectDB()
				await UserModel.find({}).then((users) =>
					res.status(200).json(
						users
							.filter((user) => result.id !== user.id)
							.map((user) => {
								const {name, email} = user
								return {name, email}
							})
					)
				)
				await connection.close().then(() => console.log('database closed'))
			} else {
				res.status(401).json({message: 'Unauthorized', err})
			}
		})
	} else {
		res.status(401).json({message: 'Only GET method'})
	}
}
