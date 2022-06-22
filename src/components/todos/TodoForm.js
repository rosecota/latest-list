import { useState } from "react"

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const userId = JSON.parse(localStorage.getItem("listapp_user")).id

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;
    const newTodoObject = {
      text: value,
      isCompleted: false,
      userId: userId
    }
    addTodo(newTodoObject);
    setValue("");

  };

  return <form className="todoForm" onSubmit={handleSubmit}>
    <input
      required
      autoFocus
      type="text"
      className="input"
      placeholder="✏️ Create..."
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </form>
}