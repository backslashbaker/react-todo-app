import React, { useState } from "react";

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
      <input type="text" value={content} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateTodo;
