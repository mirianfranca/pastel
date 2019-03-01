import mongoose from 'mongoose'
import Game from './../models/game'

const all = (req, res) => {
    Game.find({}, function(err, msg) {
        console.log("teste")
        if(err) res.send(err)
        res.json(msg) 
    })
}

const create = (req, res) => {
    let newGame = new Game(req.body)
    newGame.save(function(err, game) {
        console.log("teste")
        if(err) res.send(err)
        else res.json({message: "Game successfully added", game})
    })
}

const get = (req, res) => {
    Game.findById(req.params.id, (err, game) => {
        if (err) res.send(err)
        else res.json(game)
    })
}

export {all, create, get}