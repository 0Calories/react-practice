interface Props {
    todo: Todo,
    markTodoComplete: MarkTodoComplete
}

const TodoItem: React.FC<Props> = ({ todo, markTodoComplete }) => {
    return (
        <li>
            <label
                style={{ textDecoration: todo.isComplete ? 'line-through' : undefined }}
            >
                <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => markTodoComplete(todo)}
                />
                {todo.text}
            </label>
        </li>

    );
}

export default TodoItem
