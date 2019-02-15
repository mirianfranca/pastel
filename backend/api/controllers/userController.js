'use strict'

let mongoose = require('mongoose')

User = mongoose.model('User')

exports.all = function(req, res) {
    User.find({}, function(err, msg) {
        if(err) res.send(err)
        res.json(msg) 
    })
}

exports.create = function(req, res) {
    let newUser = new User(req.body)
    newUser.save(function(err, user) {
        if(err) res.send(err)
        else res.json({message: "User successfully added", user})
    })
}

exports.get = function(req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) res.send(err)
        else res.json(user)
    })
}