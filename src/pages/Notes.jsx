import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Notes.scss";
import { BASE_URL } from "../../constants";

const initialState = { note: "" };

const Notes = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [allNotes, setAllNotes] = useState([]);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    let errorsCopy = { ...errors };

    Object.entries(formValues).forEach((el) => {
      if (!el[1]) {
        errorsCopy = { ...errorsCopy, [el[0]]: `Please write ${el[0]}!` };
        isValid = false;
      }
    });

    setErrors(errorsCopy);

    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("call api to submit", formValues);


      try {
        const response = await axios.post(`${BASE_URL}notes`, {
          note: formValues.note,
          completed: false,
        });
        getAllNotes();
        setFormValues(initialState);
      } catch (error) {
        console.log("error while submitting", error);
      }

      setErrors(initialState);
    } else {
      console.log("Form not complete");
    }
  };

  const getAllNotes = async () => {
    console.log("getting all the notes");
    try {
      const response = await axios.get(`${BASE_URL}notes`);//! get methodu veri alimi icin kullanilir, eger Get metodu kullaniliyorsa o zaman sadece BASE_URL yazilir.
      setAllNotes(response.data);
    } catch (error) {
      console.log("error while getting", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="notes-page-main-container">
      <h1>Notes</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your note"
          id="note"
          name="note"
          onChange={onInputChange}
          value={formValues.note}
        />
        {errors.note && <p className="error-message">{errors.note}</p>}
        <button>Submit</button>
      </form>
      <div className="all-notes-container">
        {allNotes.map((el) => {
          return (
            <div key={el} className="note-container">
              <h5>{el.note}</h5>
              <div className="side-by-side">
                <p>{new Date(el.createdAt).toLocaleString()}</p>{" "}
                <p>Completed: {el.completed ? "Yes" : "No"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
