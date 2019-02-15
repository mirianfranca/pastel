import mongoose from 'mongoose'

const Schema = mongoose.Schema

const eventSchema = new Schema({
    id:{type: Number},
    name: { type: String },
    description:{type: String},
})

export default mongoose.model('Event', userSchema)