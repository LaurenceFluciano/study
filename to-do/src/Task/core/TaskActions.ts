import type { Task, TaskContent, TaskStatus } from "./TaskTypes";

export const createTask = (state: Task[], id: string) => {

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
        } as Task
    ]
}

export const removeTask = (tasks: Task[], id: string) => {
    
    return tasks.filter(task =>
        task.id !== id
    );
}

export const editTask = (tasks: Task[], payload: TaskContent, id: string) => {
    
    return tasks.map(task => {
            if (task.id === id) {
                return { ...task, ...payload };
            }
            return task
        })
}

export const changeStatusTask = (tasks: Task[], status: TaskStatus, id: string) => {
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

