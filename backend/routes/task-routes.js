const express = require('express')
const Task = require('../model/taskModel')
const router = express.Router()

router.post('/api/tasks', async (req, res) => {
     try {
          const task = await Task.create(req.body)
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
})

router.get('/api/tasks', async (re, res) => {
     try {
          const task = await Task.find()
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
})

module.exports = router