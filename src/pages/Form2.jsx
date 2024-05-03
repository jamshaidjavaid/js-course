import React, { useEffect, useState } from 'react'
import {Container, Form } from 'react-bootstrap';


const Form2 = () => {
    const[firstNumber, setFirstNumber]=useState(0);
    const[secondNumber, setSecondNumber]=useState(0);
    const[totalNumber, setTotalNumber]=useState(0);


    //!useEffect yapmak istemezsek burda o zaman 
    //!const toplam = +firstNumber+ +secondNumber; da yazabiliriz 

    //* 3. alana toplam yazilmasi icin useEffect stati kullanilir.
    useEffect(()=>{
        setTotalNumber(+firstNumber+ +secondNumber)//*+ ile stringe donusturuyoruz. ve istedigimiz gibi iki numarayi topla diyoruz
        
    },[firstNumber, secondNumber])//*iki numaramin takibini dependency ile tutuyoruz.

    const inputHandler=(e)=>{
        setFirstNumber(e.target.value)//*eventten gelen targettaki value yi alcaz
    }




  return (
    <div>

      
   <Container className='my-5'>
   <h1>Form2</h1>
   <Form>
    <Form.Group>
        <Form.Control 
        type="number" 
        placeholder="Enter first number"
        value={firstNumber}
        onChange={inputHandler}
        //*onChange={(e)=>setFirstNumber(e.target.value)} istersek direk yukarida degilde onchange e de callback ile fonksiyonu ekliyebiliriz
        />
    </Form.Group>
    <br/>

    <Form.Group>
    <Form.Control 
        type="number" 
        placeholder="Enter second number"
        value={secondNumber}
       //* onChange={inputHandler}
        onChange={(e)=>setSecondNumber(e.target.value)} //istersek direk yukarida degilde onchange e de callback ile fonksiyonu ekliyebiliriz
        />

    </Form.Group>
    <Form.Group >
    <br/>
    <Form.Control 
        type="number" 
        placeholder="Total Number"
        value={totalNumber}
        //*onChange={inputHandler}
        onChange={(e)=>setTotalNumber(e.target.value)} //istersek direk yukarida degilde onchange e de callback ile fonksiyonu ekliyebiliriz
        disabled
        />
    </Form.Group>
   </Form>

   </Container>

      
    </div>
  )
}

export default Form2
