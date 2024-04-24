


import { useState } from 'react';
import './SubscriptionForm.scss'

const SubscriptionForm = () => {

    const initialState={Subscription:""}
    const[formValues, setFormValues] = useState({initialState});
    const[errors, setErrors] = useState({initialState});


    const onInputChange=(e)=>{
        const {value, name} = e.target;
        setFormValues({...formValues,[name]: value})

        
    }
    const onSubmit = (e) => {
        e.preventDefault();
     
    };
   
  

  return (
    <div className='subscription-form-main-container'>
    <form onSubmit={onSubmit}>
    <div>
    <input 
    name='email'
    type="email" 
    placeholder="Enter your email"
    onChange={onInputChange}
    value={formValues.email}
    
    />
    </div>
    <div>
        <label>Subscription Type</label>
        <select>
            <option>Monthly</option>
            <option>Yearly</option>
        </select>
        <button>Submit</button>
         
    </div>

    </form>
    <div className="all-subs-container">
        
            <div  className="subs-container">
              <h3 className='subs-title'>Subscription</h3>

              <div className="subs-details">
              <p>Email:</p>
              <p>Date:</p>
              <p>Subscribed:Monthly</p>
              </div>
              </div>
    
      </div>



      
    </div>
  )};

export default SubscriptionForm
