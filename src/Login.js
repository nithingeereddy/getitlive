import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
return ( 
    <div className="login">
       <Link to="/">
          <img className="login_logo" src="logo1.png" width="140" height="140" alt="logo1" />
       </Link>
       <div className="login_container">
           <h1>Sign In</h1>
           <form>
               <h5>E-mail</h5>
               <input type="email" placeholder="E-mail"/>
               <h5>Password</h5>
               <input type="password" placeholder="Password"/>
               <button className="login_signInButton">Sign In</button>
           <p>By signing-in you agree to Getit! Conditions of use & Delivery</p>
           <button className="login_registerButton">Create your Getit! Account</button>
           </form>
       </div>
    </div>
);
}
export default Login;