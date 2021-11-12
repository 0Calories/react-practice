interface Todo {
    text: string
    isComplete: boolean
}

type MarkTodoComplete = (selectedTodo: Todo) => void;
