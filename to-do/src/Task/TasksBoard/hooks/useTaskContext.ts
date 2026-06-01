import { useContext } from "react";
import { TasksContext } from "../Context";

export function useTasksContext() {
    const context = useContext(TasksContext);
    if (!context) throw new Error("Componentes Task devem ser usados dentro de <Task.Root>");
    return context;
}