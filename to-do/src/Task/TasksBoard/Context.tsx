import { createContext } from "react";
import type { TaskHandlers } from "../hooks/useTask";
import type { Task } from "../core/TaskTypes";

export interface TasksContextData {
    tasks: Task[];
    taskHandlers: TaskHandlers;
}

export const TasksContext = createContext<TasksContextData | null>(null);