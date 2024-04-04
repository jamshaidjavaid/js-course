import React, { useState } from "react";
import "./TodoPage.scss";

// Need have a form - input & button
// state which will be updated on submit form
// list of todos
// Errors and Routing

const initialState = {
  todo: "",
  name: "",
  time: "",
};

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    // console.log(value, "value", name, "name");
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    let errorsCopy = { ...errors };

    Object.entries(formValues).forEach((el) => {
      console.log(el, "single form key value pair");
      if (!el[1]) {
        errorsCopy = { ...errorsCopy, [el[0]]: `Please write ${el[0]}!` };
        isValid = false;
      }
    });

    setErrors(errorsCopy);

    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formValidation = validateForm();
    if (!formValidation) {
      return;
    }

    setTodos([...todos, formValues]);
  };

  return (
    <div className="todo-page-container">
      <div className="container">
        <form onSubmit={onSubmit}>
          <input
            className="input-name"
            name="name"
            id="name"
            placeholder="Enter your name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input
            name="todo"
            id="todo"
            placeholder="What needs to be done?"
            type="text"
            value={formValues.todo}
            onChange={handleInputChange}
          />
          {errors.todo && <p className="error-message">{errors.todo}</p>}

          <input
            name="time"
            id="time"
            type="time"
            value={formValues.time}
            onChange={handleInputChange}
          />
          {errors.time && <p className="error-message">{errors.time}</p>}

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
