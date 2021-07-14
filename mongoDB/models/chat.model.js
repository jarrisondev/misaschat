const { Schema, model, models } = require('mongoose')

const chatSchema = new Schema({
  contactName: String,
  users: Array,
  messages: Array
})

export default models.chats || model('chats', chatSchema)
