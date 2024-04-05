

// update profilecode
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import Navbar from "../components/Navbar";


function Update() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {

    console.log(email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({

        email,

        password,

      }),
    })
      .then((res) => res.json()
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        }));
  }


  return (
<>
 <Navbar />
    <div className="container_Settings">


          
        {/* <nav className="nav_items" id="bar1">
          <ul className="navUl">
            <h2 id="H2">Expense Tracker</h2>
          
            <li className="listItem"><Link className="links_1" to="/Dashboard">Dashboard</Link></li>
            <li className="listItem"><Link className="links_1" to="/Transactions">Transactions</Link></li>
            <li className="listItem"><Link className="links_1" to="/Reports">Reports</Link></li>
            <li className="listItem"><Link className="links_1" to="/Reports">Budgets</Link></li>
            <li className="listItem"><Link className="links_1" to="/Goals">Goals</Link></li>
            <li className="listItem"><Link className="links_1" to="/Reports">Learn</Link></li>

          </ul>
        </nav> */}

          <div class="profile">

            <form className='loginForm' onSubmit={handleSubmit}>
              <h1 id="BAR2">Settings</h1>
              <div class="profile1">
                <h4 id="BAR2"> Profile</h4>


                <label>Email</label>
                <input  placeholder="Email" className="inputs_data"  
                  onChange={(e) => setEmail(e.target.value)} />
                {/* <button onClick={updateData}>Update</button> */}
                <button className="Logbutton" id="change">change</button>
                <label>Password</label>
                <input  placeholder="password" className="inputs_data" 
                  onChange={(e) => setPassword(e.target.value)} />
                <button className="Logbutton" id="change">change</button>
                <h4 id="BAR4">Preferences</h4>
                <div class="profile2">
                  <p id="Bar3">Transaction Notifications</p>
                  <label class="switch">
                    <input className='inputs_data' type="checkbox"></input>
                    <span class="slider round"></span>
                  </label>
                </div>
                <div class="profile3">
                  <p id="Bar3">Weekly Summary</p>
                  <label class="switch1">
                    <input className='inputs_data' type="checkbox"></input>
                    <span class="slider round"></span>
                  </label>
                </div>
                <div class="profile4">
                  <p id="Bar3">Product Updates</p>
                  <label class="switch2">
                    <input className='inputs_data' type="checkbox"></input>
                    <span class="slider round"></span>
                  </label>
                </div>

                
                <div class="save1">
                  <button className="Logbutton" id="Save">Save changes</button>
                </div>


              </div>
            </form>
          </div>
        </div>
   
 
    </>
  )
}
export default Update;