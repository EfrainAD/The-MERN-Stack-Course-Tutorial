import React from 'react'

const TaskForm = ({createTask, name, handleInputChange}) => {
     return (
          <form className='task-form' onSubmit={createTask}>
               <input type='text' placeholder='Add a task' name={name} onChange={handleInputChange} value={name} />
               
               <button type='submit'>add</button>
          </form>
     )
}

export default TaskForm