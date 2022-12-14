import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='auth'>
      <div className='gaper'>.....</div>
      <div className='gaper'>.....</div>
      <div className='gaper'>.....</div>
      <div className='gaper'>.....</div>
      <h1>Login!</h1>
      <form>
        <input required type="text" placeholder='username'/>
        <input required type="password" placeholder='password'/>
        <button>Login</button>
        {/*<p>This is an error!</p>*/}
        <span className='join'><Link to="/register">Join us!</Link></span>
        </form></div>
  )
}
