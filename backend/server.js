const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

const express = require('express')
const mongoose = require('mongoose')

const Task = require('./model/taskModel')

const app = express()

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
     res.send('<h1>This server is running</h1>')
})

app.post('/api/tasks', async (req, res) => {
     try {
          const task = await Task.create(req.body)
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
})

mongoose.connect(MONGO_URI)
     .then(
          app.listen(PORT, () => {
               console.log(`The server is running on port ${PORT}`)
          })
     )
     .catch((error) => console.log(error))