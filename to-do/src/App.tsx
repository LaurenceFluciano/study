import TaskItem from './components/Task';
import "./styles/style.css"
import { useTask } from './hooks/useTask';

function App() {
  const {
    doneTask,
    todoTask,
    taskHandlers
  } = useTask();
  

  return (
    <div className='task-board'>
      
      <div className='task-group'>
        <div className='task-group__header'>
            <span className='task-group__title'>To-do</span>
            <button className='task-group__button' onClick={taskHandlers.handleTaskCreate}>+</button>
        </div>

        <div className='task-group__list'>
          {todoTask.map((task) =>(
            <TaskItem
              key={task.id}
              task={task}
              onTaskChangeStatus={taskHandlers.handleTaskStatus}
              onTaskEdit={taskHandlers.handleTaskEdit}
              onTaskDelete={taskHandlers.handleTaskDelete}
            />
          ))}
        </div>
      </div>
      
      <div className='task-group'>
        <div className='task-group__header'>
            <span className='task-group__title'>Done</span>
        </div>
            
        <div className='task-group__list'>
          {doneTask.map(task => 
            <TaskItem
                key={task.id}
                task={task}
                onTaskChangeStatus={taskHandlers.handleTaskStatus}
                onTaskEdit={taskHandlers.handleTaskEdit}
                onTaskDelete={taskHandlers.handleTaskDelete}
            />
          )}
        </div>
      </div>
    
    </div>
  )
}

export default App


