import React, { useState } from "react";
import "./FormExample.scss";
import axios from "axios";
const BASE_URL = "https://65a14023600f49256fb1429c.mockapi.io/api/v1/";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const FormExample = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value }); //! dinamik olmasi icin once spread ile elimizdeki formdatayi ekledik ve sonra yaninaforma girilen name ve value sini [name]: value  seklinde yazdik.
  };

  const validateForm = () => {
    //! Fonksiyonun başında isValid ve errorsCopy değişkenleri tanımlanıyor.aslinda errorsCopy orjinal errorsi bozmamak icin yeni errorlari buraya eklemek icin olusturuluyor.

    let isValid = true;
    let errorsCopy = { ...errors };

    if (!formData.firstName) {
      isValid = false;
      errorsCopy.firstName = "First name is required";
    }

    if (!formData.lastName) {
      isValid = false;
      errorsCopy.lastName = "Last name is required";
    }

    if (!formData.password) {
      isValid = false;
      errorsCopy.password = "Password is required";
    }

    if (!formData.email) {
      isValid = false;
      errorsCopy.email = "Email is required";
    }

    if (!formData.phoneNumber) {
      isValid = false;
      errorsCopy.phoneNumber = "Phone number is required";
    }

    //! errorsCopy objesini state'teki errors objesine atanıyor.
    setErrors(errorsCopy);

    //! isValid değeri fonksiyon sonucu olarak döndürülüyor.
    return isValid;
  };

  const FormSubmit = async (e) => {
    e.preventDefault(); //! her veri girilisinde sayfa yenilenmesini engelledik.
    if (validateForm()) {
      //! API cagir submit icin eger hata yoksa
      try {
        const response = await axios.post(`${BASE_URL}/formExample`, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          password: formData.password,
        });

        setFormData(initialState); //! formu submitten sonra  doldurulan verileri formdan temizledik.
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("form is not submitted");
    }
    console.log(formData);
  };

  return (
    <div className="formDiv-main-container">
      <form className="form-container" onSubmit={FormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your firstname"
            name="firstName"
            onChange={onInputChange}
            value={formData.firstName}
            minLength={3}
            maxLength={33}
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your lastname"
            name="lastName"
            onChange={onInputChange}
            value={formData.lastName}
            minLength={3}
            maxLength={33}
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName}</p>
          )}
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter your phone number"
            name="phoneNumber"
            onChange={onInputChange}
            value={formData.phoneNumber}
          />
          {errors.phoneNumber && (
            <p className="error-message">{errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={onInputChange}
            value={formData.email}
            // minLength={3}
            // maxLength={33}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={onInputChange}
            value={formData.password}
            // minLength={3}
            // maxLength={33}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormExample;
