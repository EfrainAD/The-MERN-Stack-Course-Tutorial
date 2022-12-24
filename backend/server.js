const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI
const express = require('express')
const mongoose = require('mongoose')

const app = express()

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