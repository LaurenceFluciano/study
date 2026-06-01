import { useContext } from "react";
import { TaskContext } from "../components/Task/TaskBoard/TaskContext";

export function useTaskContext() {
    const context = useContext(TaskContext);
    if (!context) throw new Error("Componentes Task devem ser usados dentro de <Task.Root>");
    return context;
}