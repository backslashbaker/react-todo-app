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

function TodoList({ todo, onDelete, onComplete, onClear }) {
  const [filter, setFilter] = useState("all");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function handleMouseOver(e) {
    e.target.style.color = "#3A7CFD";
  }

  function handleMouseOut(e) {
    if (e.target.name !== "clearCompleted") {
      e.target.style.color = "#9495A5";
    } else {
      e.target.style.color = "#E3E4F1";
    }
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
              <IconButton onClick={() => onDelete(todos.id)}>
                <CloseRoundedIcon />
              </IconButton>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ButtonGroup size="small">
        <Button
          variant="text"
          style={{ fontSize: "8px", color: "#9495A5" }}
          onClick={() => handleFilterChange("all")}
          onMouseEnter={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          All
        </Button>
        <Button
          variant="text"
          style={{ fontSize: "8px", color: "#9495A5" }}
          onClick={() => handleFilterChange("active")}
          onMouseEnter={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Active
        </Button>
        <Button
          variant="text"
          style={{ fontSize: "8px", color: "#9495A5" }}
          onClick={() => handleFilterChange("completed")}
          onMouseEnter={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Completed
        </Button>
        <Button
          variant="text"
          name="clearCompleted"
          style={{ fontSize: "8px", color: "#E3E4F1" }}
          onClick={onClear}
          onMouseEnter={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Clear Completed
        </Button>
      </ButtonGroup>
    </TableContainer>
  );
}

export default TodoList;
