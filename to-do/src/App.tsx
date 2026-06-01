import Task from "./components/Task/TaskBoard/Task"
import "./styles/global.css"

function App() {

  return (
    <Task.Board>
        <Task.Todo>
          <Task.Header title="To-do">
            <Task.Actions>
              <Task.ButtonCreate />
            </Task.Actions>
          </Task.Header>
          <Task.TodoList />
        </Task.Todo>

        <Task.Done>
          <Task.Header title="Done" />
          <Task.DoneList />
        </Task.Done>
    </Task.Board>
  )
}

export default App


