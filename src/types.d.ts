interface Todo {
    text: string
    isComplete: boolean
}

interface Timer {
    hours: number
    minutes: number
    seconds: number
}

type MarkTodoComplete = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
