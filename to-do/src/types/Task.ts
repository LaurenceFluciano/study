export type TaskStatus = |
  'done' |
  'todo'

export type TaskItem = {
  id: string,
  name: string,
  description: string,
  status: TaskStatus
}