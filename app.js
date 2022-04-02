const express = require('express')
const completeRouter = require('./api/index')
const app = express()

app.use('/complete', completeRouter)

module.exports = app
