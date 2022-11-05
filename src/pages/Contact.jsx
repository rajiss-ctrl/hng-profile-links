import React, { useEffect, useState } from 'react'

import './Contact.css'

const Contact = () => {
   
   let name = "Raji"
   const formState = {
    firstname:"",
    lastname:"",
    email:"",
    message:"",
    checked:false
   }
    const [values,setValues] = useState(formState)
    const [isSubmit,setIsSubmit] =useState(false);
    const [err,setErr] =useState({});
   const handleChange =(e)=>{
     // setValues({...values, [e.target.name]: e.target.value})
     //get user inputs
     const {name,value,checked,type} = e.target
     setValues({...values,[name]:type === 'checkbox' ? checked : value})
    }
    const handleSubmit=(e)=>{
     e.preventDefault()

    //called the err function here
    setErr(validate(values))
    setIsSubmit(true)
    console.log(values)
    }
useEffect(()=>{
  console.log(err)
    if(Object.keys(err).length === 0 && isSubmit){
      console.log(values)
  }
},[err])

const validate =(inputs)=>{
      const error ={}
      const regex = /^[^\s@]+@[^s@]+\.[^\s@]{2,}$/i;  
      {!inputs.firstname ?
        error.firstname = "First name field is required" : <></>
      }
      {!inputs.lastname ?
        error.lastname = "Last name field is required" : <></>
      }
      if(!inputs.email){
        error.email = "Email is required"
      }else if(!regex.test(values.email)){
        error.email = "Email must be a valid email!"
      }
      // {!inputs.email ||  !regex.test(values.email) ?
      //   error.email = "Email is required" : <></> 
      // }
      {!inputs.message ?
        error.message = "Message field must be filled" : <></>
      }
      {!inputs.checked ?
        error.checked = "You must agree to the term!" : <></>
      }
      return error
    }
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={handleSubmit}>
          <div className="name__split">
            <label className='mobile_fiestname'>
              First name
            <input id="first_name" className={`${err.firstname} && "test"`} type="text" name='firstname' value={values.firstname} onChange={handleChange} placeholder="Enter your first name" />
            <p className={!isSubmit ? 'no_err' : "err"}>{err.firstname}</p>
            </label>
            <label>
              Last name
            <input id="last_name" type="text" name='lastname' value={values.lastname} onChange={handleChange} placeholder="Enter your lastst name" />
            <p className={!isSubmit ? 'no_err' : "err"}>{err.lastname}</p>
            </label>
          </div>
          <label>
            Email
            <input id="emai" type="email" name='email' value={values.email} onChange={handleChange} placeholder="yourname@email.com" />
            <p className={!isSubmit ? 'no_err' : "err"}>{err.email}</p>
          </label>
            <label>
              Message
            <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message" name="message" value={values.message} onChange={handleChange}></textarea>
            <p className={!isSubmit ? 'no_err' : "err"}>{err.message}</p>
            </label>
          <div className="checkbox">
          <span className='check_wrap'><input type="checkbox" name='checked' value={values.checked} onChange={handleChange}/></span>
            <span>You agree to providing your data to {name} who may contact you.</span>
          </div>
          <p className={!isSubmit ? 'no_err' : "err"}>{err.checked}</p>
          <button id="btn__submit" >Send message</button>
        </form>
    </div>
  )
}

export default Contact