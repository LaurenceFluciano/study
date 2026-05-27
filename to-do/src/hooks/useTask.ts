import { useMemo, useReducer } from "react";
import { taskReducer } from "../lib/TaskReducer";
import type { TaskContent, TaskStatus } from "../lib/TaskType";

export function useTask() {
    const [state, dispatch] = useReducer(taskReducer, []);

    const doneTask = useMemo(() => state.filter(task => task.status === 'done'), [state]);
    const todoTask = useMemo(() => state.filter(task => task.status === 'todo'), [state]);

    const taskHandlers = useMemo(() => ({
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
        }), []);

    return {
        doneTask,
        todoTask,
        taskHandlers
    }
}