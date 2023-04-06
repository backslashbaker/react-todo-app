import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodoCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }
  return (
    <div>
      <Header />
      {console.log(todos)}
      <CreateTodo onSubmit={addTodo} />
      <TodoList
        todo={todos}
        onDelete={removeTodo}
        onComplete={toggleTodoCompleted}
      />
    </div>
  );
}

export default App;
