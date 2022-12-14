import React from 'react'
import { Link } from 'react-router-dom'


export const Register = () => {
  return (
    <div className='auth'>
      <h1>Hello!</h1>
      <h2>Welcome To the Rotaract family!</h2>
      <form>
        <input required type="text" placeholder='username'/>
        <input required type="email" placeholder='email'/>
        
        <input required type="password" placeholder='password'/>
        <input required type="date" placeholder='date'/>
        <input required type="number" placeholder='NIC'/>
        {/*<input required type="number" placeholder='year'/>*/}

        <button>Register</button>
        <p>Email Shoud be "____@___.com" </p>
        <span><Link to="/login">Already A member</Link></span>
        </form></div>
  )
}
