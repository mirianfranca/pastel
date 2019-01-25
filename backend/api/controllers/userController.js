'use strict'

var mongoose = require('mongoose')

User = mongoose.model('User')

exports.all = function(req, res) {
    User.find({}, function(err, msg) {
        if(err) res.send(err)
        res.json(msg) 
    })
}

exports.create = function(req, res) {
    var newUser = new User()
    newUser.name = req.body.name
    newUser.username = req.body.username
    newUser.password = req.body.password
    newUser.save(function(err, msg) {
        if(err) res.send(err)
        res.json(msg)
    })
}