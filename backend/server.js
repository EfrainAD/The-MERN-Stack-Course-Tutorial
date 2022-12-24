const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const express = require('express')
const connectDB = require('./config/connectDB')

const app = express()

app.get('/', (req, res) => {
     res.send('<h1>This server is running</h1>')
})

const startServer = async () => {
     try {
          await connectDB()

          app.listen(PORT, () => {
               console.log(`The server is running on port ${PORT}`)
          })
     } catch (error) {
          console.log(error)
     }
}
startServer()