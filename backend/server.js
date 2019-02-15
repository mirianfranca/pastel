import express from 'express'
import mongoose from'mongoose'
import { User } from './api/models/user'
import bodyParser from 'body-parser'
import routes from './api/routes/userRoute'

export const app = express()

const port = process.env.PORT || 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/msgdb')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
routes(app)
app.listen(port)
console.log('PASTEL2')