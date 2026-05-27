import type { TaskItem, TaskStatus } from "../types/Task";

type TaskItemProps = {
    task: TaskItem;
    onTaskChange: (id: string, payload: Partial<TaskItem>) => void;
    trashOnClick: (id: string) => void;
}

export default function TaskItemCard({
        task, 
        onTaskChange, 
        trashOnClick
    }: TaskItemProps) {


    const isDone = task.status === 'done';

    const isTaskEmpty =  task.name == '' && task.description == ''

    return (
        <div className='task'>
            <div className='task__header'>
                <input 
                    type="checkbox" 
                    id={`task__checkbox-${task.id}`} 
                    className='task__checkbox'

                    disabled={isTaskEmpty}
                    checked={isDone}
                    onChange={(e) => {
                        const newStatus: TaskStatus = e.target.checked ? 'done' : 'todo';
                        onTaskChange(task.id, { status: newStatus });
                    }}
                />
                <input 
                    type="text" 
                    id={`task__name-${task.id}`} 
                    className='task__name' 
                    value={task.name}
                    
                    autoFocus={isTaskEmpty}
                    disabled={isDone}
                    onChange={(e) => onTaskChange(task.id, { name: e.target.value })} 
                />
                    
                <button 
                    id={`task__trash-${task.id}`} 
                    className='task__trash'
                    
                    onClick={() => trashOnClick(task.id)} 
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
                    onChange={(e) => onTaskChange(task.id, { description: e.target.value })} 
                ></textarea>
            </div>
        </div>
    )
} 