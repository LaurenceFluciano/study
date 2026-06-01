import { useMemo } from "react";
import { useTaskContext } from "../../../hooks/useTaskContext";
import TaskItem from "../TaskItem/TaskItem";


export function TodoList() {
    const { tasks } = useTaskContext();
    const todoTasks = useMemo(() => tasks.filter(t => t.status === 'todo'), [tasks]);

    return (
        <div className="task__list task__list--todo">
            {todoTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}