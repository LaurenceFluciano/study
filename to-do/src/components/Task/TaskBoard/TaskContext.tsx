import { createContext } from "react";
import type { TaskHandlers } from "../../../hooks/useTask";
import type { Task } from "../../../lib/TaskTypes";

export interface TaskContextData {
    tasks: Task[];
    taskHandlers: TaskHandlers;
}

export const TaskContext = createContext<TaskContextData | null>(null);