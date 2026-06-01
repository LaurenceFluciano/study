export function Header({ title = "Default", children }: { title?: string, children?: React.ReactNode }) {

    return (
        <div className="task-board__header">
            <span className="task-board__title">{title}</span>
            {children}
        </div>
    );
}