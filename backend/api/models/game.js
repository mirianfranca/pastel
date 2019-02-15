import mongoose from'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema({
    name: { type: String },
    category:{type: String},
    id:{type: Number}
})

export default mongoose.model('Game', userSchema)