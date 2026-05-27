export type TaskStatus = |
  'done' |
  'todo'

export type TaskItem = {
  id: string,
  name: string,
  description: string,
  status: TaskStatus
}

export type TaskAction =
    | { type: "CREATE" } 
    | { type: "REMOVE", id: string }
    | { type: "UPDATE", payload: Partial<TaskItem>, id: string }
