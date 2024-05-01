import React, { useState } from 'react'
import './Forms.scss'
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

const Forms = () => {

    const[userName,setUserName]=useState("");//*stateimiz suan bos string, username e ne yazilirsa value olarak yani inputa o bu bos stringin icine yazilir yani username yani value demek


    

    const handleChange=(e)=>{
        setUserName(e.target.value);//*value degerlerini aldik, state i gunceller
        
   
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();//*formu submit edince sayfa yeniler bunu onlemek icin.

        console.log(userName , "username");
       await axios.post('https://jsonplaceholder.typicode.com/users', {
            //body icindeki bilgileri burdan gondeririz 
            userName: userName
        })
       
    };
    




  return (
    <>
      <Container>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter Name' 
        name='name'
        value={userName}//*inputa ne yazdiysak value oluyor buda dogrudan username(state icine gidiyor)
        onChange={handleChange}


        />
        <Button type="submit">Send</Button>
      </form>
      </Container>
    </>
  )
}

export default Forms
