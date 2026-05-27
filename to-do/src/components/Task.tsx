import type { TaskItem, TaskContent, TaskStatus } from "../lib/TaskType";

type TaskItemProps = {
    task: TaskItem;
    onTaskEdit: (id: string, payload: TaskContent) => void;
    onTaskChangeStatus: (id: string, status: TaskStatus) => void;
    onTaskDelete: (id: string) => void;
}

export default function TaskItem({
        task, 
        onTaskEdit,
        onTaskChangeStatus,
        onTaskDelete
    }: TaskItemProps) {


    const isDone = task.status === 'done';

    const isTaskContentEmpty =  task.title == '' && task.description == ''

    return (
        <div className='task'>
            <div className='task__header'>
                <input 
                    type="checkbox" 
                    id={`task__checkbox-${task.id}`} 
                    className='task__checkbox'

                    disabled={isTaskContentEmpty}
                    checked={isDone}
                    onChange={(e) => {
                        const newStatus: TaskStatus = e.target.checked ? 'done' : 'todo';
                        onTaskChangeStatus(task.id, newStatus);
                    }}
                />
                <input 
                    type="text" 
                    id={`task__name-${task.id}`} 
                    className='task__name' 
                    value={task.title}
                    
                    autoFocus={isTaskContentEmpty}
                    disabled={isDone}
                    onChange={(e) => onTaskEdit(task.id, { title: e.target.value })} 
                />
                    
                <button 
                    id={`task__trash-${task.id}`} 
                    className='task__trash'
                    
                    onClick={() => onTaskDelete(task.id)} 
                > 
                    X 
                </button>

            </div>

            <div className='task__body'>
                <textarea
                    id={`task__description-${task.id}`}  
                    className='task__description'
                    value={task.description}

                    disabled={isDone}
                    onChange={(e) => onTaskEdit(task.id, { description: e.target.value })} 
                ></textarea>
            </div>
        </div>
    )
} 