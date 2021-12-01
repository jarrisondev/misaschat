import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.info('database connect')
    })
    .catch((err) => {
      console.error(err)
    })
}

export const closeDB = async () => {
  try {
    await mongoose.connection.close()
    console.info('dabase close')
  } catch (err) {
    console.error(err)
  }
}
