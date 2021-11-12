import { useState } from 'react';

import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

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

    const addTodo: AddTodo = (text: string) => {
        const newTodo: Todo = {
            text,
            isComplete: false
        }

        setTodos(todos => [...todos, newTodo]);
    }

    return (
        <div>
            {todos.map(todo =>
                <TodoItem
                    todo={todo}
                    markTodoComplete={markTodoComplete}
                    key={todo.text}
                />
            )}

            <AddTodoForm addTodo={addTodo} />
        </div>
    );
}

export default TodoContainer;
