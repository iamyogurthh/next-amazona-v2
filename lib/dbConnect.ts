import mongoose from 'mongoose'

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('Connected Successfully')
  } catch (error) {
    throw new Error('Connect failed: ', error!)
  }
}

export default dbConnect
