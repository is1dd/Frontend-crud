import React, { useState } from 'react'
import { Navigate, redirect, useNavigate  } from 'react-router-dom';


function Creation() {
  const redirect = useNavigate()
  const [user,setUser] = useState({
    id:"",
    first_name:"",
    last_name:"",
    email:"",
    avatar:"",
  })
  const handleChange = (e)=>{
    const {value,name} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
   const res = await fetch(`http://localhost:3000/users`,{
    method:'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body:JSON.stringify(user)
   });
   redirect('/')
  
  
}
  return (
    <div>
      <h1 id="form-head"> Add A User</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}  name={'id'} placeholder='enter your id'></input>
            <input type="text" onChange={handleChange} name={'first_name'}  placeholder='enter your first name'></input>
            <input type="text" onChange={handleChange} name={'last_name'} placeholder='enter your last name'></input>
            <input type="text" onChange={handleChange} name={'email'} placeholder='enter your email'></input>
            <input type="text" onChange={handleChange} name={'avatar'} placeholder='enter image address'></input>
            <input type="submit" value={'Submit'} ></input>
        </form>
    </div>
  )
}

export default Creation