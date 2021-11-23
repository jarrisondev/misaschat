const { Schema, model, models } = require('mongoose')

const chatSchema = new Schema({
  users: Array,
  messages: Array
})

export default models.chats || model('chats', chatSchema)
