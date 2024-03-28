
import './Login.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import{Link} from "react-router-dom";
import axios from 'axios';
import { FaHotdog } from 'react-icons/fa';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FcGoogle } from "react-icons/fc";
import Google from "./Google";
import Avatar from './Avatar.avif';


// import { RiGoogleLine } from "react-icons/ri"

// import Google from './Google';
const Login=()=>{
  const[Email,setEmail]=useState()
  const[Password,setPassword]=useState()
  const navigate = useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(Email,Password);
  axios.post('http://localhost:3050/Login',{Email,Password})
  .then(res  => {console.log(res)
    if(res.data==="Success"){
      window.alert("YOUR ARE NOW LOGGED IN...!")
      navigate('/')
    }
    else{
      window.alert("YOUR  DATA IS WRONG PLEASE TRY AGAIN")
    }
})
  .catch(err=>console.log(err))
  
}
return(
  
    <div class="container">
      
      <nav>
          <ul>
      
            <li id="Expensers"><Link to="/SignUp"> <FaHotdog />Expense Tracker</Link></li>
            

          </ul>
          </nav>
      <Link to="./Update"><img src={Avatar} alt="Avatar" className='avatar'/></Link>
      <h1>Welcome to Expense Tracker</h1>
      <h5 id="log">Log in to your account</h5>
    <form onSubmit={handleSubmit}>
    <label for="Email">Email</label>
    <input type="email" id="email" name="email"size="30"autoComplete="off" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input>

    <label for="password">Password</label>
        <input type="password" id="password" name="email" required onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input>
        
        <input type="checkbox" id="check" name="check" ></input>  
        <label for="check" id="Rembr">Remember me</label>
        {/* <Link to="/Login" ><button id="Link">Login</button></Link> */}
        <button type="submit" id="Subb">Log in</button>
    <p id="OR">OR</p>
    {/* {<Google></Google>} */}
    <Google></Google><b id="goog"><FcGoogle /></b><p id="continue">Continue with Google</p>
        <p id="ACC">Don't have an account ?</p>
        <Link to="/SignUp" ><p id="createone">Create one</p></Link>
    {/* <Link to="/"><button>Login</button></Link> */}
    </form>
    {/* { <Link to="/SignUp"> <p>New user? <button onClick={(e)=>navigateToLogin()}>signup</button></p></Link> } */}
   {/* <p>OR</p> */}
   {/* <Google></Google> */}
   <i class="fa-brands fa-google"></i>
   <Link to="/Forget"><p id="Forgot">Forget Password...?</p></Link>
   
   <Link to="/SignUp" ><button id="sign">Sign Up</button></Link>
  
  

    
    {/* <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" required></input> */}
    
    </div>
)}


export default Login;