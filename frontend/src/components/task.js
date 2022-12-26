import { FaEdit, FaCheckDouble, FaRegTrashAlt } from 'react-icons/fa'

const Task = ({task, index, deleteTask}) => {
     const handleDelete = () => deleteTask(task._id)
     return (
          <div className="task">
               <p>
                    <b>{index}. </b>
                    {task.name}
               </p>
               <div className="task-icons">
                    <FaCheckDouble color='green' />
                    <FaEdit color='purple' />
                    <FaRegTrashAlt color='red' onClick={handleDelete} />
               </div>
          </div>
     )
}

export default Task