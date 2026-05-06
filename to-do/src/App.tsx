import { useState, type ChangeEvent } from 'react'

type TaskStatus = |
  'done' |
  'todo'

type TaskItem = {
  id: string,
  name: string,
  description: string,
  status: TaskStatus
}



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
            return (
              <div key={task.id} className='task'>
                <div className='task__header'>
                  <input onChange={finishTask} className='task__checkbox' type="checkbox" id={task.id} />
                  <input type="text" onChange={setName} className='task__name' id={task.id}/>
                  <button onClick={() => removeTask(task.id)} className='task__trash' id={task.id}>X</button>
                </div>

                <div className='task__body'>
                  <textarea className='task__description'></textarea>
                </div>
              </div>
            )
          }
        })}
      </div>
      
      
      <div className='container__header'>
          <span className='container__subtitle'>Done</span>
          <div className='container__tasks'>
            {tasks.map(task => {
              
              if (task.status == 'done') {
                return (
                  <div key={task.id} id={task.id} className='task'>
                    <div className='task__header'>
                      <input checked onChange={returnTask} className='task__checkbox' type="checkbox" id={task.id} />
                      <input type="text" className='task__name' value={task.name} />
                      <button onClick={() => removeTask(task.id)} className='task__trash'>X</button>
                    </div>

                    <div className='task__body'>
                      <textarea className='task__description'>{task.description}</textarea>
                    </div>
                  </div>
                )
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
