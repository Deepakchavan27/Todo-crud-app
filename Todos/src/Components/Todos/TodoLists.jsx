import React from "react";

function TodoLists({ title, status, id, handleToggle, handleDelete }) {
  return (
    <div>
      <b>{title}</b> - {status ? "DONE" : "NOT DONE"}
      <button onClick={() => handleToggle(id, !status)}>TOGGLE</button>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </div>
  );
}

export default TodoLists;
