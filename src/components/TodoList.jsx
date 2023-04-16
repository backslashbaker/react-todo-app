import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import "./TodoList.css";

function TodoList({ todo, onDelete, onComplete, onClear }) {
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

  const remainingTodos = todo.filter((todo) => !todo.completed).length;

  return (
    <TableContainer className="TodoList" component={Paper}>
      <Table>
        <TableBody>
          {filteredTodos.map((todos) => (
            <TableRow key={todos.id}>
              <TableCell>
                <Checkbox
                  icon={<PanoramaFishEyeRoundedIcon />}
                  checked={todos.completed}
                  onChange={() => onComplete(todos.id)}
                />
              </TableCell>

              <TableCell
                className={`TodoContainer${
                  todos.completed ? " completed" : ""
                }`}
              >
                {todos.content}
              </TableCell>
              <TableCell className="DeleteButton">
                <IconButton onClick={() => onDelete(todos.id)}>
                  <CloseRoundedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <span style={{ textAlign: "left", fontSize: "8px" }}>
        {remainingTodos} {remainingTodos === 1 ? "item" : "items"} left
      </span>
      <ButtonGroup size="small" className="ButtonRow">
        <Button
          variant="text"
          onClick={() => handleFilterChange("all")}
          className="FilterButton"
        >
          All
        </Button>
        <Button
          variant="text"
          onClick={() => handleFilterChange("active")}
          className="FilterButton"
        >
          Active
        </Button>
        <Button
          variant="text"
          onClick={() => handleFilterChange("completed")}
          className="FilterButton"
        >
          Completed
        </Button>
        <Button
          variant="text"
          name="clearCompleted"
          onClick={onClear}
          className="FilterClearButton"
        >
          Clear Completed
        </Button>
      </ButtonGroup>
    </TableContainer>
  );
}

export default TodoList;
