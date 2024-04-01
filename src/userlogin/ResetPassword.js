import './Login.css';
import React from "react";
import { useState } from "react";
import{useParams} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const ResetPassword=()=>{
  const[Password,setPassword]=useState()
  const[ConfirmPassword,setConfirmPassword]=useState()
  const navigate = useNavigate()
const {id,token}=useParams()

axios.defaults.withCredentials=true;
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post(`http://localhost:3050/reset-password/${id}/${token}`,{Password,ConfirmPassword})
  .then(res  => {
    if(res.data.Status==="Success")
    {
      window.alert("YOUR PASSWORD HASH BEEN SUUCESSFULY UPDATED! PLEASE LOGIN NOW.")
      navigate('/Login')
    }
})
  .catch(err=>console.log(err))
  
}
return(
    <div className="containers_1">
      <h1 class="reset">Reset Password</h1>
      <div class="resetPassword">
    <form className='loginForm' onSubmit={handleSubmit}>
    <label className='label_log' for="Password">New Password</label>
    <input className='inputs_data' type="password" id="Password" name="Password" size="30"autoComplete="off" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
    <label className='label_log' for="Password">Confirm Password</label>
    <input className='inputs_data' type="password" id="confirmPassword" placeholder="Re-enter password"name="email"required autoComplete="off" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                
    <button className="Logbutton" type="submit" id="SignIN">Update</button>
    </form>
    </div>
   
   {/* <Link to="/SignUp" ><button>Sign Up</button></Link> */}
   {/* <Link to="/Forget">Forget Password..?</Link> */}
    </div>
)}
export default ResetPassword;