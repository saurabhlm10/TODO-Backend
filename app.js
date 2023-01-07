require('dotenv').config()

const express = require('express')
const app = express()
const connectToDb = require('./config/db')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDb()

const todoRoutes = require('./routes/todoRoutes')

app.use('/', todoRoutes)

module.exports = app