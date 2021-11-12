import { useState } from 'react';

import TodoItem from './TodoItem';

const initialTodos: Todo[] = [
    {
        text: 'Walk the dog',
        isComplete: true
    },
    {
        text: 'Create a Todo app using TypeScript and React',
        isComplete: false
    },
];

const TodoContainer = () => {
    const [todos, setTodos] = useState(initialTodos);

    const markTodoComplete = (selectedTodo: Todo) => {
        setTodos(todos => todos.map(todo => {
            if (todo.text === selectedTodo.text) {
                return {
                    ...todo,
                    isComplete: !selectedTodo.isComplete
                };
            }

            return todo
        }));
    };

    return (
        <ul>
            {todos.map(todo => <TodoItem todo={todo} markTodoComplete={markTodoComplete} />)}
        </ul>
    );
}

export default TodoContainer;
