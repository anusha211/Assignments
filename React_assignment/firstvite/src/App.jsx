import React from 'react'
import './App.css'
import Hellofunction from './Hello'
import Counter from './Counter'
import Input from './Input';
import Button from './Button';

function App() {

  return (
    <>
       <div>
      <Input placeholder="Enter your name" label="Name:   " />
      <Input placeholder="Enter your email" label="Email:  " />
      <Button buttonText="Submit" variant="primary" />
      <Button buttonText="Cancel" variant="secondary" />
    </div>
     

    </>
  )
}

export default App
