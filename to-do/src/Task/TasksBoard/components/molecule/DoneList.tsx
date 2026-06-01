import { useMemo } from "react";
import TaskItem from "../../../TaskItem/TaskItem";
import { useTasksContext } from "../../hooks/useTaskContext";

export function DoneList() {
    const { tasks } = useTasksContext();
    const doneTasks = useMemo(() => tasks.filter(t => t.status === 'done'), [tasks]);

    return (
        <div className="task__list task__list--done">
            {doneTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}