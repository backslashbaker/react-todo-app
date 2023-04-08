import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function CreateTodo({ onSubmit }) {
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ id: Date.now(), content, completed: false });
    setContent("");
  }

  function handleChange(event) {
    setContent(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        type="text"
        value={content}
        onChange={handleChange}
      />
      {/* <button onClick={handleSubmit} variant="text">
        Add
      </button> */}
    </form>
  );
}

export default CreateTodo;
