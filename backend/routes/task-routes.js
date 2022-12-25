const express = require('express')
const Task = require('../models/taskModel')
const router = express.Router()
const {createTask, getAllTask, getTask, deleteTask} = require('../controllers/task-controllor')

router.post('/api/tasks', createTask)
router.get('/api/tasks', getAllTask)
router.get('/api/tasks/:id', getTask)
router.delete('/api/tasks/:id', deleteTask)

module.exports = router