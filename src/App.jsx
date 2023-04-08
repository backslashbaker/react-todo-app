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
  return (
    <>
      <Container maxWidth="sm">
        <Header />

        <Stack spacing={2}>
          <Paper>
            <CreateTodo onSubmit={addTodo} />
          </Paper>
          <Paper>
            <TodoList
              todo={todos}
              onDelete={removeTodo}
              onComplete={toggleTodoCompleted}
            />
          </Paper>
        </Stack>
      </Container>
    </>
  );
}

export default App;
