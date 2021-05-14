import { Schema, model } from 'mongoose'

const userSchema = new Schema({
	username: String,
	name: String,
	password: String,
})

export default model('User', userSchema)
