import mongoose from 'mongoose'

const User = mongoose.model('User')

const all = (req, res) => {
    User.find({}, function(err, msg) {
        if(err) res.send(err)
        res.json(msg) 
    })
}

const create = (req, res) => {
    let newUser = new User(req.body)
    newUser.save(function(err, user) {
        if(err) res.send(err)
        else res.json({message: "User successfully added", user})
    })
}

const get = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) res.send(err)
        else res.json(user)
    })
}

export {all, create, get}