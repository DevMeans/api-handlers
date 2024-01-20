import { Todo } from "@prisma/client"

export const Updatetodo = async (id: string, complete: boolean): Promise<Todo> => {
    const body = { complete }
    const todo = await fetch(`/api/todo/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        res => res.json()

    )
    console.log(todo)
    return todo
}
export const createTodo = async (description: string): Promise<Todo> => {
    const body = { description }
    const todo = await fetch(`/api/todo`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        res => res.json()

    )
    console.log(todo)
    return todo;
}
export const deleteTodo = async (): Promise<Todo> => {
    const todo = await fetch(`/api/todo`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        res => res.json()
    )
    console.log(todo)
    return todo;
}

