import { useEffect, useState } from "react"
import { getTodos, createTodo, deleteTodo, editTodo } from "../../managers/APIManager"
import { TodoForm } from "./TodoForm";

import "./Todos.scss"

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const user = JSON.parse(localStorage.getItem("listapp_user"))

    const fetchTodos = () => {
        getTodos(user.id).then(setTodos)
    };

    useEffect(
        () => {
            fetchTodos()
        },
        []
    )


    const addTodo = (newTodoObject) => {
        createTodo(newTodoObject)

        const newTodos = [...todos, newTodoObject];
        setTodos(newTodos);
    };

    return <>

        <h2 className="text-center">Your Todos</h2>
        <div className="todo-list">
            {todos.map((todo) => (<>
                <div className="todo" key={todo.id}
                    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                >
                    <div className="todo__text">{todo.text}</div>
                    <div className="todo__isCompleted">{todo.isCompleted}</div>
                    <footer>
                        <button
                            className="complete-btn"
                            onClick={() => {
                                const copy = { ...todo }
                                copy.isCompleted = !todo.isCompleted;
                                editTodo(todo.id, copy).then(fetchTodos);
                            }}
                        >
                            {todo.isCompleted ? "✅" : "☑️"} Update
                        </button>
                        <button
                            className="delete-btn"
                            onClick={() => {
                                fetch(`http://localhost:8088/todos/${todo.id}`, {
                                    method: "DELETE",
                                }).then(() => {
                                    fetchTodos();
                                });
                            }}
                        >
                            🧨 Delete
                        </button>
                    </footer>
                </div>
            </>
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    </>
}

