import Tasks from "./Task/TasksBoard/Index"
import "./styles/global.css"

function App() {

  return (
    <Tasks.Board>
        <Tasks.Todo>
          <Tasks.Header title="To-do">
            <Tasks.Actions>
              <Tasks.ButtonCreate />
            </Tasks.Actions>
          </Tasks.Header>
          <Tasks.TodoList />
        </Tasks.Todo>

        <Tasks.Done>
          <Tasks.Header title="Done" />
          <Tasks.DoneList />
        </Tasks.Done>
    </Tasks.Board>
  )
}

export default App


