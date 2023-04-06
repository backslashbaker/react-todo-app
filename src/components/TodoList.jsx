import React, { useState } from "react";

function TodoList({ todo, onDelete, onComplete }) {
  const [filter, setFilter] = useState("all");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const filteredTodos = todo.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div>
      <table>
        <tbody>
          {filteredTodos.map((todos) => (
            <tr key={todos.id}>
              <td
                style={
                  todos.completed ? { textDecoration: "line-through" } : {}
                }
              >
                {todos.content}
                <input
                  type="checkbox"
                  checked={todos.completed}
                  onChange={() => onComplete(todos.id)}
                />
                <button onClick={() => onDelete(todos.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("active")}>Active</button>
        <button onClick={() => handleFilterChange("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
