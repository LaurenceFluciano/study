
import type { TaskAction, TaskItem } from "../types/Task";

export function taskReducer(state: TaskItem[], action: TaskAction) {
    switch (action.type) {
        case "CREATE":
            return createTask(state)
        
        case "REMOVE":

            break;
        
        case "UPDATE":

            break;

        default:
            return state;
    }
}

const createTask = (prev: TaskItem[]) => {
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