'use strict'

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var gameSchema = new Schema({
    name: { type: String },
    category:{type: String},
    id:{type: Number}
})

module.exports = mongoose.model('Game', userSchema)