import React from "react";
import { useState } from "react";

function AddTodo({handleAdd}) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () =>{
    handleAdd(text)
  }
  return (
    <div>
      <div>
        <input placeholder="Add Something" onChange={handleChange} />
        <button onClick={handleSubmit}>ADD</button>
      </div>
    </div>
  );
}

export default AddTodo;
