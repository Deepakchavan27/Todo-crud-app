export const getTodos = (props = {}) => {
  const { titleSortBy = "ASC", page = 1} = props;
  return fetch(
    `http://localhost:8080/todos?_sort=title&_order=${titleSortBy}&_page=${page}&_limit=2`
  ).then((res) => res.json());
};

export const addTodo = (todo) => {
  return fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const toggleTodo = (id, newStatus) => {
  return fetch(`http://localhost:8080/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: newStatus }),
  });
};

export const deleteTodo = (id) => {
  return fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
