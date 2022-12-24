const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

const express = require('express')
const mongoose = require('mongoose')

const Task = require('./model/taskModel')
const taskRouter = require('./routes/task-routes')

const app = express()

// Middleware
app.use(express.json())
app.use(taskRouter)

app.get('/', (req, res) => {
     res.send('<h1>This server is running</h1>')
})

mongoose.connect(MONGO_URI)
     .then(
          app.listen(PORT, () => {
               console.log(`The server is running on port ${PORT}`)
          })
     )
     .catch((error) => console.log(error))