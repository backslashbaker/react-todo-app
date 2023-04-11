import { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
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

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }
  return (
    <>
      <Container maxWidth="lg" className="backgroundImage">
        <Container maxWidth="sm">
          <div>
            <Header />
          </div>

          <Stack spacing={2}>
            <Paper>
              <CreateTodo onSubmit={addTodo} />
            </Paper>

            <TodoList
              todo={todos}
              onDelete={removeTodo}
              onComplete={toggleTodoCompleted}
              onClear={clearCompleted}
            />
          </Stack>
        </Container>
      </Container>
    </>
  );
}

export default App;
