'use strict'

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var eventSchema = new Schema({
    id:{type: Number},
    name: { type: String },
    description:{type: String},
})

module.exports = mongoose.model('Event', userSchema)