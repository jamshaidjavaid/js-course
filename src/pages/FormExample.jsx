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

    //! formData'nın her bir öğesi üzerinde döngü oluşturuluyor.
    Object.entries(formData).forEach((el) => {
      //!Eğer formData'nın bir öğesi boş veya false değerine sahipse,
      if (!el[1]) {
        //! errorsCopy objesine yeni bir hata mesajı ekleniyor.
        //! Örneğin, formData'nın bir öğesi 'name' ise, hata mesajı 'Please write name!' olacak.
        errorsCopy = { ...errorsCopy, [el[0]]: `Please write ${el[0]}!` };
        //! isValid değeri false olarak güncelleniyor.
        isValid = false;
      }
    });

    //! errorsCopy objesini state'teki errors objesine atanıyor.
    setErrors(errorsCopy);

    //! isValid değeri fonksiyon sonucu olarak döndürülüyor.
    return isValid;
  };

  const FormSubmit = async (e) => {
    e.preventDefault(); //! her veri girilisinde sayfa yenilenmesini engelledik.
    if(validateForm()){
      //! API cagir submit icin eger hata yoksa
      try {
        const response = await axios.post(`${BASE_URL}/formExample`,{
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber:formData.phoneNumber,
          email:formData.email,
          password: formData.password,

        });
        
      } catch (error) {
        console.log(error);
        
      }

    }else{
      console.log("form is not submitted");  
    }
    setFormData(initialState); //! formu submitten sonra  doldurulan verileri formdan temizledik.
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
            required
          />
          {errors.formData && (
            <p className="error-message">{errors.formData}</p>
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
          required
        />
        {errors.formData && <p className="error-message">{errors.formData}</p>}
        </div>
        <div>
        <input
          type="number"
          placeholder="Enter your phone number"
          name="phoneNumber"
          onChange={onInputChange}
          value={formData.phoneNumber}
          required
        />
        {errors.formData && <p className="error-message">{errors.formData}</p>}
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
          required
        />
        {errors.formData && <p className="error-message">{errors.formData}</p>}
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
          required
        />
        {errors.formData && <p className="error-message">{errors.formData}</p>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormExample;
