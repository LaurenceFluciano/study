import { createTask, removeTask, editTask, changeStatusTask } from "./TaskActionsMethod";
import type { TaskItem, TaskAction } from "./TaskType";

export function taskReducer(state: TaskItem[], action: TaskAction) {
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
