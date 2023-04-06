import React from "react";

function TodoList({ todo, onDelete, onComplete }) {
  return (
    <div>
      <table>
        <tbody>
          {todo.map((todos) => (
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
    </div>
  );
}

export default TodoList;
