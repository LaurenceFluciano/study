import { createTask, removeTask, editTask, changeStatusTask } from "./TaskActions";
import type { Task, TaskAction } from "./TaskTypes";

export function taskReducer(state: Task[], action: TaskAction) {
    switch (action.type) {
        case "CREATE":
            return createTask(state, action.id)
        
        case "REMOVE":
            return removeTask(state, action.id)
        
        case "EDIT":
            return editTask(state, action.payload, action.id)
        
        case "CHANGE_STATUS":
            return changeStatusTask(state, action.status, action.id)

        default:
            return state;
    }
}
