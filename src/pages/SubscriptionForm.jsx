
import './SubscriptionForm.scss'

const SubscriptionForm = () => {

  return (
    <div className='subscription-form-main-container'>
    <form >
    <div>
    <input 
    name='email'
    type="email" 
    placeholder="Enter your email"
    
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
              <p>Subscribed: Monthly</p>
              </div>
    
      </div>



      
    </div>
  )};

export default SubscriptionForm
