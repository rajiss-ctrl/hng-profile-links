import React from 'react'
import InputData from './InputData'


const Contact = () => {
   const FormInput = [
    {
      id:"first_name",
      name:"firstname",
      value:"",
      label:"First name",
      placeholder:"Enter your first name",
      errorMessage:"",
    },
    {
      id:"last_name",
      name:"lastname",
      value:"",
      label:"Last name",
      placeholder:"Enter your last name",
      errorMessage:"",
    },
    {
      id:"email",
      name:"email",
      label:"Email",
      value:"",
      placeholder:"yourname@email.com",
      errorMessage:"",
    },
    {
      id:"textarea",
      name:"textarea",
      value:"",
      label:"Message",
      placeholder:"Send me a message and I'll replyyou as soon as possible...",
      errorMessage:"",
    },
   ]
   let name = "raji"
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form >
          {FormInput.map((input)=>{
            <InputData key={input.id} {...input}/>
          })}
          <div className="checkbox">
            <input type="" />
            <span>You agree to providing your data to {name} who may contact you.</span>
          </div>
          <button>Send message</button>
        </form>
    </div>
  )
}

export default Contact