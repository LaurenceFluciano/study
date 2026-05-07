import type { ChangeEvent } from "react";
import type { TaskItem } from "../types/Task";

type TaskItemProps = {
    task: TaskItem,
    statusOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
    nameOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
    descriptionOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    transhOnClick: () => void

}

export default function TaskItemCard({task, statusOnChange, nameOnChange, descriptionOnChange, transhOnClick}: TaskItemProps) {
    return (
        <div className='task'>
            <div className='task__header'>
                <input onChange={statusOnChange} className='task__checkbox' type="checkbox" id={task.id} />
                <input type="text" onChange={nameOnChange} className='task__name' id={task.id}/>
                <button onClick={transhOnClick} className='task__trash' id={task.id}>X</button>
            </div>

            <div className='task__body'>
                <textarea onChange={descriptionOnChange} className='task__description'></textarea>
            </div>
        </div>
    )
} 