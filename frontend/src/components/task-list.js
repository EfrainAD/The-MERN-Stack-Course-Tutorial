import Task from "./task"
import TaskForm from "./task-form"
import { URL } from '../App'
import { useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"

const TaskList = () => {
     const [taskData, setTaskData] = useState('')
     const handleInputChange = (e) => {
          const {name, value} = e.target
          setTaskData({...taskData, [name]: value})
     }
     const createTask = async (e) => {
          e.preventDefault()
          if (taskData === '') return toast.error('Can not send an empty to-do')
          try {
               await axios.post(`${URL}/api/tasks`, taskData)
               toast.success('Task has been added')
               setTaskData('')
          } catch (error) {
               toast.error(error.message)
          }
     }
     // name={name} onChange={} value={name} /
     return (
          <div>
               <h2>Task Manager</h2>
               <TaskForm createTask={createTask} handleInputChange={handleInputChange} />
               <div className="--flex-between --pd">
                    <p>
                         <b>Totle Task:</b> 0
                    </p>
                    <p>
                         <b>Completed Task:</b> 0
                    </p>
               </div>
               <hr />
               <Task />
          </div>
     )
}

export default TaskList