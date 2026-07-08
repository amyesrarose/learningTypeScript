interface Todo { // creates costum data type
    id: number
    title: string
    status: TodoStatus
    completedOn?: Date // not required, but if it is used, it must be a Date object
}

enum TodoStatus { // limites values TodoStatus variable in runtime
    Todo = "todo",
    InProgress = "in-progress",
    Done = "done"
}

const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoStatus.Todo },
]

function addTodoItem(todo: string): Todo {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: TodoStatus.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends { id: number }>(items: T[]): number {
    //funtion funtionName <T(item:T):T {body of the funtion}
    // structure of generic --> Allow certain types to be used in a function, class,
    //  or interface without specifying the exact type and :T defines return type of the function is the same as the type of the input parameter.
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))