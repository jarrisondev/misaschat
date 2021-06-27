import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  email: String,
  name: String,
  password: String
})

export default models.users || model('users', userSchema)
