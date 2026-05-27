import type { TaskItem, TaskContent, TaskStatus } from "./TaskType";

export const createTask = (state: TaskItem[], id: string) => {

    const cleanedState = state.filter(task => {
        const isEmpty = task.title.trim() === '' && task.description.trim() === '';
        return !isEmpty;
    });

   
    return [
        ...cleanedState,
        {
        id: id,
        title: '',
        description: '',
        status: 'todo'
        } as TaskItem
    ]
}

export const removeTask = (tasks: TaskItem[], id: string) => {
    
    return tasks.filter(task =>
        task.id !== id
    );
}

export const editTask = (tasks: TaskItem[], payload: TaskContent, id: string) => {
    
    return tasks.map(task => {
            if (task.id === id) {
                return { ...task, ...payload };
            }
            return task
        })
}

export const changeStatusTask = (tasks: TaskItem[], status: TaskStatus, id: string) => {
    return tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                status
            }
        }
        return task
    })
}

