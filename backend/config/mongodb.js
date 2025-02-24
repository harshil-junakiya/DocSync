import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/docsync`) // slash generates news database in atlas
}

export default connectDB