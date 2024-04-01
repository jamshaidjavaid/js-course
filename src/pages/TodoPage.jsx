import React, { useState } from "react";
import "./TodoPage.scss";

// Need have a form - input & button
// state which will be updated on submit form
// list of todos

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !time) return;

    setTodos([...todos,{todo,name,time}]);
    setTodo("");
    setName("");
    setTime("");

  };

  return (
    <div className="todo-page-container">
      <div className="container">
        <form onSubmit={onSubmit}>
        <input className="input-name"
        name="Name" 
        id="Name" 
        placeholder="Enter your name" 
        type="text"
        value={name}
        onChange={handleNameChange } />
        
          <input
            name="todo"
            id="todo"
            placeholder="What needs to be done?"
            type="text"
            value={todo}
            onChange={handleInputChange}
            />
            <input
            name="time" 
            id="time" 
            type="time"
            value={time}
            onChange={handleTimeChange}
            />
          <button>Submit</button>
        </form>
        <div className="all-todos-container">
          <h4>My All Todos</h4>
          {todos.map((item) => (
            <div key={item} className="single-item">
            <h6>{item.todo}</h6>
              <p>Name: {item.name}</p>
              <p>Time: {item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
