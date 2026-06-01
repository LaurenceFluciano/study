import React from "react";
import { TaskContext } from "./TaskContext";
import { useTask } from "../../../hooks/useTask";

export function Board({
    children
}: {
    children: React.ReactNode
}) {
    const value = useTask();

    return (
        <div className="task-board">
            <TaskContext.Provider
                value={value}
            >
                {children}
            </TaskContext.Provider>
        </div>
    );
}



