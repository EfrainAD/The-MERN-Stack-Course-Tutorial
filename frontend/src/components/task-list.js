import Task from "./task"
import TaskForm from "./task-form"
import { URL } from '../App'
import { useEffect, useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"
import loadingImage from '../assets/loader.gif'

const TaskList = () => {
     const [taskData, setTaskData] = useState('')
     const [tasks, setTasks] = useState([])
     const [completedTask, setCompletedTask] = useState([])
     const [isLoading, setIsLoading] = useState(false)

     const handleInputChange = (e) => {
          const {name, value} = e.target
          setTaskData({...taskData, [name]: value})
     }

     const getTasks = async () => {
          setIsLoading(true)
          try {
               const { data } = await axios(`${URL}/api/tasks`)
               setTasks(data)
               setIsLoading(false)
          } catch (error) {
               toast.error(error.message)
               setIsLoading(false)
          }
     }
     useEffect(() => {
       getTasks()
     }, [])
     

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
               {
                    isLoading && (
                         <div className="--flex-center">
                              <img src={loadingImage} alt='loading' />
                         </div>
                    )
               }
               {
                    !isLoading && tasks.length === 0 ? (
                         <p className="--py">You have no tasks</p>
                    ):(
                         <>
                              {tasks.map((task, index) => <Task key={task._id} task={task} index={index + 1} />)}
                         </>
                    )
               }
               {/* <Task /> */}
          </div>
     )
}

export default TaskList