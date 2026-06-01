import { useReducer } from "react";
import { taskReducer } from "../core/TaskReducer";
import type { TaskContent, TaskStatus } from "../core/TaskTypes";

export interface TaskHandlers {
    handleTaskEdit(id: string, payload: TaskContent): void;
    handleTaskStatus(id: string, status: TaskStatus): void;
    handleTaskDelete(id: string): void;
    handleTaskCreate(): void;
}

export function useTask() {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const taskHandlers: TaskHandlers = {
            handleTaskEdit: (id: string, payload: TaskContent) => {
                dispatch({ type: "EDIT", id, payload });
            },
            handleTaskStatus: (id: string, status: TaskStatus) => {
                dispatch({ type: "CHANGE_STATUS", id, status });
            },
            handleTaskDelete: (id: string) => {
                dispatch({ type: "REMOVE", id });
            },
            handleTaskCreate: () => {
                const id = crypto.randomUUID();
                dispatch({ type: "CREATE", id });
            }
        }
        

    return {
        tasks,
        taskHandlers
    }
}