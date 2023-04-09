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
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {filteredTodos.map((todos) => (
            <TableRow key={todos.id}>
              <Checkbox
                icon={<PanoramaFishEyeRoundedIcon />}
                checked={todos.completed}
                onChange={() => onComplete(todos.id)}
              />
              <TableCell
                style={
                  todos.completed ? { textDecoration: "line-through" } : {}
                }
              >
                {todos.content}
              </TableCell>
              {/* <IconButton onClick={() => onDelete(todos.id)}>
                <CloseRoundedIcon />
              </IconButton> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ButtonGroup size="small">
        <Button
          variant="text"
          style={{ fontSize: "8px" }}
          onClick={() => handleFilterChange("all")}
        >
          All
        </Button>
        <Button
          variant="text"
          style={{ fontSize: "8px" }}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </Button>
        <Button
          variant="text"
          style={{ fontSize: "8px" }}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </Button>
      </ButtonGroup>
    </TableContainer>
  );
}

export default TodoList;
