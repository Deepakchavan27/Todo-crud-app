import React, { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, toggleTodo } from "../../api/todos";
import AddTodo from "./AddTodo";
import Pagination from "./Pagination";
import TodoLists from "./TodoLists";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [titleSortBy, setTitleSortBy] = useState("asc");
  const [page,setPage] = useState(1);

  useEffect(() => {
    handleGetTodo();
  }, [titleSortBy,page]);

  const handleGetTodo = () => {
    setLoading(true);
    return getTodos({ titleSortBy,page })
      .then((res) => {
        setLoading(false);
        setTodos(res);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleAdd = (text) => {
    const item = {
      title: text,
      status: false,
    };
    setLoading(true);
    addTodo(item)
      .then((res) => {
        handleGetTodo();
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleToggle = (id, newStatus) => {
    setLoading(true);
    toggleTodo(id, newStatus)
      .then((res) => {
        handleGetTodo();
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteTodo(id)
      .then((res) => {
        handleGetTodo();
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <button
        onClick={() =>
          setTitleSortBy((prev) => (prev === "ASC" ? "DESC" : "ASC"))
        }
      >
        {titleSortBy === "ASC" ? "Make Desc" : "Make ASC"}
      </button>
      <div>{loading && "LOADING!"}</div>
      <h3>PENDING</h3>
      {todos
        .filter((item) => !item.status)
        .map((items) => (
          <TodoLists
            key={items.id}
            title={items.title}
            status={items.status}
            id={items.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}

      <h3>COMPLETED</h3>
      {todos
        .filter((item) => item.status)
        .map((items) => (
          <TodoLists
            key={items.id}
            title={items.title}
            status={items.status}
            id={items.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
        <button onClick={() =>setPage(prev => prev - 1)} disabled={page === 1}>Prev</button>
        <button>{page}</button>
        <button onClick={() =>setPage(prev => prev + 1)}>Next</button>    
        <Pagination total={5} current = {page} onChange={(value) => setPage(value)}/>     
    </div>
  );
}

export default Todo;
