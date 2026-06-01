import { useMemo } from "react";
import { useTaskContext } from "../../../hooks/useTaskContext";
import TaskItem from "../TaskItem/TaskItem";

export function DoneList() {
    const { tasks } = useTaskContext();
    const doneTasks = useMemo(() => tasks.filter(t => t.status === 'done'), [tasks]);

    return (
        <div className="task__list task__list--done">
            {doneTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}