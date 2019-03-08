import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    dt_created: { type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema)