const express = require('express')
const Task = require('../models/taskModel')
const router = express.Router()
const {createTask, getAllTask} = require('../controllers/task-controllor')

router.post('/api/tasks', createTask)

router.get('/api/tasks', getAllTask)

module.exports = router