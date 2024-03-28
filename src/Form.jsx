import React, { useState } from "react";
import "./Form.css";

const initialState = {
  name: "",
  email: "",
  phoneNo: "",
  address: "",
};
//hello

const Form = () => {
  const [formValues, setFormValues] = useState(initialState);

  const inputChangeHandler = (event) => {
    console.log(event.target.name);
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);

    console.log("submitted");
  };

  return (
    <div className="form-main-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          onChange={inputChangeHandler}
          value={formValues.name}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          onChange={inputChangeHandler}
          value={formValues.email}
        />
        <input
          type="number"
          name="phoneNo"
          id="phoneNo"
          placeholder="Enter phone number"
          onChange={inputChangeHandler}
          value={formValues.phoneNo}
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter address"
          onChange={inputChangeHandler}
          value={formValues.address}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
