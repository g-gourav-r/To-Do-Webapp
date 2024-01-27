import React from 'react'
import { FaUser,FaLock } from "react-icons/fa";
import "./LoginForm.css"

export const LoginForm = () => {
  return (
    <div className="wrapper">
        <form action="" method="post">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" name="" id="" />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" name="" id="" />
                <FaLock className='icon'/>
            </div>  
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember Me</label>    
                <a href="#">Forgot Password?</a>
            </div>         
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>    
            </div> 
        </form>
    </div>
  )
}
