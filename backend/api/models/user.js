'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    dt_created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)