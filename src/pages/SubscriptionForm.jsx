import { useEffect, useState } from "react";
import "./SubscriptionForm.scss";
import axios from "axios";
import { BASE_URL } from "../../constants";

const SubscriptionForm = () => {
  const initialState = { email: "", subscribed: "" };
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [all, setAll] = useState([]);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const obj = { ...errors };
    let isValid = true;

    Object.entries(obj).forEach(([key, value]) => {
      if (!formValues[key]) {
        isValid = false;
        obj[key] = "This field is required";
      }
    });

    setErrors(obj);
    return isValid;
  };

  // Async/Await --- for calling apis
  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        console.log(formValues, "formValues");
        const response = await axios.post(`${BASE_URL}subcriptions`, {
          ...formValues,
        });
        console.log(response, "response");
        getAllSubcriptions();
      } catch (errors) {
        console.log(errors, "errors");
      }
    }
  };

  const getAllSubcriptions = async () => {
    const response = await axios.get(`${BASE_URL}subcriptions`);
    console.log(response, "response");
    setAll(response.data);
  };

  useEffect(() => {
    getAllSubcriptions();
  }, []);

  return (
    <div className="subscription-form-main-container">
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={onInputChange}
            value={formValues.email}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Subscription Type</label>
          <select onChange={onInputChange} name="subscribed" id="subscribed">
            <option value={"monthly"}>Monthly</option>
            <option value={"yearly"}>Yearly</option>
          </select>
          {errors.subscribed && <p>{errors.subscribed}</p>}
          <button>Submit</button>
        </div>
      </form>
      <div className="all-subs-container">
        <div className="subs-container">
          <h3 className="subs-title">Subscription</h3>

          {all.map((el) => (
            <div className="subs-details">
              <p>Email: {el.email}</p>
              <p>Date:</p>
              <p>Subscribed:Monthly</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
