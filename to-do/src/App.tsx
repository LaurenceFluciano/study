import { useState, type ChangeEvent } from 'react'
import type { TaskItem } from './types/Task';
import TaskItemCard from './components/Task';

function App() {
  const [tasks, setTask] = useState<TaskItem[]>([]);

  const createTask = () => {
    setTask((prev) => {
        return [
          ...prev,
          {
            id: crypto.randomUUID().toString(),
            name: '',
            description: '',
            status: 'todo'
          } as TaskItem
        ]
      }
    )
  }

  const finishTask = (e: ChangeEvent<HTMLInputElement>) => {
      setTask((prev) => {
        return prev.map(task => {
          if (task.id == e.target.id) {
            return {
              ...task,
              status: 'done'
            } 
          }
          return task;
        })
      })

  }

  const returnTask = (e: ChangeEvent<HTMLInputElement>) => {
      setTask((prev) => {
        return prev.map(task => {
          if (task.id == e.target.id) {
            return {
              ...task,
              status: 'todo'
            } 
          }
          return task;
        })
      })

  }

  const setName = (e: ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => {
        return prev.map(task => {
          if (task.id == e.target.id) {
            return {
              ...task,
              name: e.target.value
            } 
          }
          return task;
        })
      })
  }

  const setDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTask((prev) => {
        return prev.map(task => {
          if (task.id == e.target.id) {
            return {
              ...task,
              description: e.target.value
            } 
          }
          return task;
        })
      })
  }

  const removeTask = (id: string) => {
     setTask((prev) => {
        return prev.filter(task => {
          if (task.id != id) {
            return task
          }
          return;
        })
      })
  }

 
  return (
    <div className='container'>
      <div className='container__header'>
          <span className='container__subtitle'>To-do</span>
          <button className='container__add--task' onClick={createTask}>+</button>
      </div>
      <div className='container__tasks'>
        {tasks.map((task) =>{
          
        
          if (task.status == 'todo') {
             return <TaskItemCard
                    task={task}
                    nameOnChange={setName}
                    descriptionOnChange={setDescription}
                    statusOnChange={finishTask}
                    transhOnClick={() => { removeTask(task.id) }}
                  />
          }
        })}
      </div>
      
      
      <div className='container__header'>
          <span className='container__subtitle'>Done</span>
          <div className='container__tasks'>
            {tasks.map(task => {
              
              if (task.status == 'done') {
                return <TaskItemCard
                    task={task}
                    nameOnChange={setName}
                    descriptionOnChange={setDescription}
                    statusOnChange={returnTask}
                    transhOnClick={() => { removeTask(task.id) }}
                  />
              }
            })}
          </div>
      </div>
      <div className='container__tasks'>

      </div>

    </div>
  )
}

export default App
