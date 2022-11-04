import React, { useState } from 'react'

import './Contact.css'

const Contact = () => {
   
   let name = "raji"
   const [values,setValues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    message:"",
    check:false
   })
   const handleSubmit=(e)=>{
    e.preventDefault()
   }
   const handleChange =(e)=>{
    setValues({...values, [e.target.name]: e.target.value})
   }
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={handleSubmit}>
          <div className="name__split">
            <label className='mobile_fiestname'>
              First name
            <input id="first_name" type="text" placeholder="Enter your first name" />
            </label>
            <label>
              Last name
            <input id="last_name" type="text" placeholder="Enter your lastst name" />
            </label>
          </div>
          <label>
            Email
            <input id="emai" type="email" placeholder="yourname@email.com" />
          </label>
            <label>
              Message
            <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message" name="" cols="30" rows="10"></textarea>
            </label>
          <div className="checkbox">
            <span className='check_wrap'><input type="checkbox" /></span>
            <span>You agree to providing your data to {name} who may contact you.</span>
          </div>
          <button id="btn__submit" type='submit'>Send message</button>
        </form>
    </div>
  )
}

export default Contact