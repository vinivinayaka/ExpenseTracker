
import './Login.css';
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
// import{Link} from "react-router-dom";
import axios from 'axios'
import { FaHotdog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Forget = () => {
  const [Email, setEmail] = useState()
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3050/Forget', { Email })
      .then(res => {
        if (res.data.Status === "Success") {

          navigate('/Login')
        }
      })
      .catch(err => console.log(err))

  }
  return (
    <>

      <nav className="nav_items" id="Naviii">
        <ul className="navUl">

          <li id="Expen"><Link className='links_1' to="/SignUp"> <FaHotdog /><b>Expense Tracker</b></Link></li>


        </ul>
      </nav>
    <div className="containers_1">
    
      <h1 className="forget">Forget Password</h1>
      <div className="forgetPassword">
        <form className='loginForm' onSubmit={handleSubmit}>
          <label className='label_log' for="Email">Email:</label>
          <input className='inputs_data' type="email" id="email" name="email" size="30" autoComplete="off" onChange={(e) => setEmail(e.target.value)}></input>
          <button className="Logbutton" type="submit" id="SignIN">Send</button>
        </form>
        {/* <Link to="/SignUp" ><button>Sign Up</button></Link> */}
      </div>
    </div>
    </>
  )
}
export default Forget;