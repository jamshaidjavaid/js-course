import React, { useState } from "react";
import "./TodoPage.scss";

// Need have a form - input & button
// state which will be updated on submit form
// list of todos

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="todo-page-container">
      <div className="container">
        <form onSubmit={onSubmit}>
          <input
            name="todo"
            id="todo"
            placeholder="What needs to be done?"
            type="text"
            value={todo}
            onChange={handleInputChange}
          />
          <button>Submit</button>
        </form>
        <div className="all-todos-container">
          <h4>My All Todos</h4>
          {todos.map((item) => (
            <div className="single-item">
              <h6>{item}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
