import { useTaskContext } from "../../../hooks/useTaskContext"

export default function ButtonCreate() {
    const createHandler = useTaskContext().taskHandlers.handleTaskCreate;

    return (
        <button className="task-board__action task-board__button task-board__action--create" onClick={createHandler}>+</button>
    )
}