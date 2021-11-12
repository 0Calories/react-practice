interface Todo {
    text: string
    isComplete: boolean
}

type MarkTodoComplete = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
