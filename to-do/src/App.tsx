import { useReducer } from 'react'
import TaskItemCard from './components/Task';
import "./styles/style.css"
import { taskReducer } from './lib/task';
import type { TaskItem } from './types/Task';

function App() {
  const [state, dispatch] = useReducer(taskReducer, []);

  const handleTaskChange = (id: string, payload: Partial<TaskItem>) => {
    dispatch({
      type: "UPDATE",
      id,
      payload
    });
  };

  const handleRemoveTask = (id: string) => {
    dispatch({ 
      type: "REMOVE", 
      id
    })
  }
  

  return (
    <div className='container'>
      
      <div className='container__header'>
          <span className='container__subtitle'>To-do</span>
          <button className='container__add--task' onClick={() => dispatch({ type: "CREATE" })}>+</button>
      </div>

      <div className='container__tasks'>
        {state
        .filter(task => task.status === 'todo')
        .map((task) =>(
          <TaskItemCard
            key={task.id}
            task={task}
            onTaskChange={handleTaskChange}
            trashOnClick={handleRemoveTask}
          />
        ))}
      </div>
      

      <div className='container__header'>
          <span className='container__subtitle'>Done</span>
      </div>
          
      <div className='container__tasks'>
        {state
        .filter(task => task.status === 'done')
        .map(task => 
          <TaskItemCard
              key={task.id}
              task={task}
              onTaskChange={handleTaskChange}
              trashOnClick={handleRemoveTask}
          />
        )}
      </div>
    
    </div>
  )
}

export default App


