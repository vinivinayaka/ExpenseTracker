
import './Login.css';
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
// import{Link} from "react-router-dom";
import axios from 'axios'
import { FaHotdog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Forget=()=>{
  const[Email,setEmail]=useState()
  const navigate = useNavigate()
axios.defaults.withCredentials=true;
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3050/Forget',{Email})
  .then(res  => {
    if(res.data.Status==="Success"){
    
      navigate('/Login')
    }
})
  .catch(err=>console.log(err))
  
}
return(
    <div class="container">
       <nav id="Naviii">
          <ul>
      
            <li id="Expen"><Link to="/SignUp"> <FaHotdog /><b>Expense Tracker</b></Link></li>
            

          </ul>
          </nav>
      <h1 class="forget">Forget Password</h1>
      <div class="forgetPassword">
    <form onSubmit={handleSubmit}>
    <label for="Email">Email:</label>
    <input type="email" id="email" name="email"size="30"autoComplete="off" onChange={(e)=>setEmail(e.target.value)}></input>
    <button type="submit" id="SignIN">Send</button>
    </form>
   {/* <Link to="/SignUp" ><button>Sign Up</button></Link> */}
   </div>
    </div>
)}
export default Forget;