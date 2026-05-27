export type TaskStatus = |
  'done' |
  'todo'

export type TaskItem = {
  id: string,
  title: string,
  description: string,
  status: TaskStatus
}

export type TaskContent = Partial<Omit<TaskItem, "id" | "status">>

export type TaskAction =
    | { type: "CREATE", id: string } 
    | { type: "REMOVE", id: string }
    | { type: "EDIT", payload: TaskContent, id: string }
    | { type: "CHANGE_STATUS", status: TaskStatus, id: string}
