import Task from "./task"
import TaskForm from "./task-form"

const taskList = () => {
     return (
          <div>
               <h2>Task Manager</h2>
               <TaskForm />
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

export default taskList