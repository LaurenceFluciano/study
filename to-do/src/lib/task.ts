import type { TaskAction, TaskItem } from "../types/Task";

export function taskReducer(state: TaskItem[], action: TaskAction) {
    switch (action.type) {
        case "CREATE":
            return createTask(state)
        
        case "REMOVE":
            return removeTask(state, action.id)
        
        case "UPDATE":
            return updateTask(state, action.payload, action.id)

        default:
            return state;
    }
}

const createTask = (state: TaskItem[]) => {

    const cleanedState = state.filter(task => {
        const isEmpty = task.name.trim() === '' && task.description.trim() === '';
        return !isEmpty;
    });

   
    return [
        ...cleanedState,
        {
        id: crypto.randomUUID().toString(),
        name: '',
        description: '',
        status: 'todo'
        } as TaskItem
    ]
}

const removeTask = (tasks: TaskItem[], id: string) => {
    
    return tasks.filter(task => {
        if (task.id != id) {
            return task
        }
        return;
    })
}

const updateTask = (tasks: TaskItem[], payload: Partial<TaskItem>, id: string) => {
    
    return tasks.map(task => {
            if (task.id == id) {
                return { ...task, ...payload };
            }
            return task
        })
}

