import type { Task, TaskStatus } from "../core/TaskTypes";
import { useTasksContext } from "../TasksBoard/hooks/useTaskContext";

type TaskItemProps = {
    task: Task;
}

export default function TaskItem({
        task, 
    }: TaskItemProps) {

    const handlers = useTasksContext().taskHandlers;

    const isDone = task.status === 'done';

    const isTaskContentEmpty =  task.title == '' && task.description == ''

    return (
        <div className='task-item'>
            <div className='task-item__header'>
                <input 
                    type="checkbox" 
                    id={`task-item__checkbox-${task.id}`} 
                    className='task-item__checkbox'

                    disabled={isTaskContentEmpty}
                    checked={isDone}
                    onChange={(e) => {
                        const newStatus: TaskStatus = e.target.checked ? 'done' : 'todo';
                        handlers.handleTaskStatus(task.id, newStatus);
                    }}
                />
                <input 
                    type="text" 
                    id={`task-item__name-${task.id}`} 
                    className='task-item__name' 
                    value={task.title}
                    
                    autoFocus={isTaskContentEmpty}
                    disabled={isDone}
                    onChange={(e) => handlers.handleTaskEdit(task.id, { title: e.target.value })} 
                />
                    
                <button 
                    id={`task-item__trash-${task.id}`} 
                    className='task-item__trash'
                    
                    onClick={() => handlers.handleTaskDelete(task.id)} 
                > 
                    X 
                </button>

            </div>

            <div className='task-item__body'>
                <textarea
                    id={`task__description-${task.id}`}  
                    className='task__description'
                    value={task.description}

                    disabled={isDone}
                    onChange={(e) => handlers.handleTaskEdit(task.id, { description: e.target.value })} 
                ></textarea>
            </div>
        </div>
    )
} 