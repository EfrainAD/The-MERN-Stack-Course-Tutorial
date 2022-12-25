const express = require('express')
const Task = require('../models/taskModel')
const router = express.Router()
const {createTask, getAllTask, getTask, deleteTask, updateTask} = require('../controllers/task-controllor')

router.post('/api/tasks', createTask)
router.get('/api/tasks', getAllTask)
router.get('/api/tasks/:id', getTask)
router.put('/api/tasks/:id', updateTask)
router.delete('/api/tasks/:id', deleteTask)

module.exports = router