import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const respoonse = await axios.get("http://localhost:3001/api/todos");
        setTodos(respoonse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTodos();
  }, []);

  async function addTodo(newTodo) {
    try {
      const trimmedValue = newTodo.content.trim();

      if (trimmedValue === "") {
        alert("Please enter a valid todo");
        return;
      }

      const response = await axios.post("http://localhost:3001/api/todos", {
        content: newTodo.content,
        completed: false,
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function removeTodo(id) {
    try {
      await axios.delete(`http://localhost:3001/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async function toggleTodoCompleted(id) {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) return;

      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      await axios.put(`http://localhost:3001/api/todos/${id}`, updatedTodo);

      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
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
