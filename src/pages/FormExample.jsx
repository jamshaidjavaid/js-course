import React, { useState } from 'react'
import "./FormExample.scss";

const initialState={
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    password:"",
   
}
  


const FormExample = () => {

    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState(initialState);


    const onInputChange=(e)=>{
        const {value, name} = e.target;
        setFormData({...formData, [name]: value})//! dinamik olmasi icin once spread ile elimizdeki formdatayi ekledik ve sonra yaninaforma girilen name ve value sini [name]: value  seklinde yazdik.
        }


        const validateForm = () => {
            let isValid = true;
            let errorsCopy = { ...errors };
        
            Object.entries(formData).forEach((el) => {
                if (!el[1]) {
                  errorsCopy = { ...errorsCopy, [el[0]]: `Please write ${el[0]}!` };
                  isValid = false;
                }
              });
        
            setErrors(errorsCopy);
        
            return isValid;
          };


    const FormSubmit=(e)=>{
        e.preventDefault();//! her veri girilisinde sayfa yenilenmesini engelledik.
        setFormData(initialState);//! formu submitten sonra  doldurulan verileri formdan temizledik.
        console.log(formData);
  
    };

    
  return (
    <div className='formDiv-main-container'>
    <form className='form-container' onSubmit={FormSubmit}>
    <input type="text"
    placeholder="Enter your firstname"
    name='firstname'
    onChange={onInputChange}
    value={formData.firstname}
    minLength={3}
    maxLength={33}
    required

    />
    <input type="text"
    placeholder="Enter your lastname"
    name='lastname'
    onChange={onInputChange}
    value={formData.lastname}
    minLength={3}
    maxLength={33}
    required

    />
    <input type="number"
    placeholder="Enter your phone number"
    name='phonenumber'
    onChange={onInputChange}
    value={formData.phonenumber}
    required

    />

    <input type="email"
    placeholder="Enter your email"
    name='email'
    onChange={onInputChange}
    value={formData.email}
    // minLength={3}
    // maxLength={33}
    required

    />
    <input type="password"
    placeholder="Enter your password"
    name='password'
    onChange={onInputChange}
    value={formData.password}
    // minLength={3}
    // maxLength={33}
    required
    />
    <button>Submit</button>
      
    </form>
    </div>
  )
}

export default FormExample
