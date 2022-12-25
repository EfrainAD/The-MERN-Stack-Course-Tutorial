import { ToastContainer } from 'react-toastify'
import TaskList from './components/task-list'

function App() {
  return (
    <div className="app">
      <div className="task-container">
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
