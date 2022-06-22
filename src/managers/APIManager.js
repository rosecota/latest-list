export const getTodos = (uid) => {
    return fetch(`http://localhost:8088/todos?userId=${uid}`)
        .then(response => response.json())
}

export const createTodo = (newTodoObject) => {
    return fetch(`http://localhost:8088/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodoObject)
    })
        .then(response => response.json())
}

export const deleteTodo = (id) => {
    return fetch(`http://localhost:8088/todos/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}

export const editTodo = (id, todo) => {
    return fetch(`http://localhost:8088/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
        .then(response => response.json())
}
