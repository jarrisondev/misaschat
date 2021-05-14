import { Schema, model } from 'mongoose'

const userSchema = new Schema({
	email: String,
	name: String,
	password: String,
})

export default model('User', userSchema)
