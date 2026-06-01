import React from "react";
import { TasksContext } from "./Context";
import { useTask } from "../hooks/useTask";

export function Board({
    children
}: {
    children: React.ReactNode
}) {
    const value = useTask();

    return (
        <div className="task-board">
            <TasksContext.Provider
                value={value}
            >
                {children}
            </TasksContext.Provider>
        </div>
    );
}



