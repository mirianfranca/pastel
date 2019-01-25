'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
    name: { type: String },
    username: { type: String },
    password: { type: String },
    dt_created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)