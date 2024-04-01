
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
// import axios from 'axios';

function UpdateUser() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  // const [message, setMessage] = useState('');
  const[Email,setEmail] = useState("");
      const[Password,setPassword] = useState("");
      
  


      useEffect(() => {
             console.log(location);
               setEmail(location.state.Email);
               setPassword(location.state.Password);
              
           },[])
  // useEffect(() => {
  //   // Fetch user data when component mounts
  //   axios.get('http://localhost:5000/userData') // Assuming user ID is 1, replace with dynamic ID if needed
  //     .then(response => setUserData(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  
    const updateData = () =>{
        console.log(Email,Password);
        fetch("http://localhost:3500/UpdateUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id:location.state._id,
       Email : Email,
        Password : Password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
            window.location.href="/Home"
      });
 }

  // const handleUpdate = async () => {
  //   try {
  //     const response = await axios.put(http://localhost:5000/UpdateUser, {fname,lname, email });
  //     console.log(response.data.message);
  //     // Update user data in state after successful update
  //     setUserData(prevUserData => ({
  //       ...prevUserData,
  //       fname: fname || prevUserData.fname,
  //       lname: lname || prevUserData.lname,
  //       email: email || prevUserData.email
  //     }));
  //   } catch (error) {
  //     console.log(error.response.data.error);
  //   }
  // };

  return (
    <div>
      {/* <h2>User Data</h2>
      <p>fname: {userData.fname}</p>
      <p>Lname: {userData.lname}</p>
      <p>Email: {userData.email}</p> */}
     
{/* 
      <h2>Update User Data</h2>
      <input type="fname" placeholder="New fname" value={fname} onChange={(e) => setFname(e.target.value)} />
      <input type="lname" placeholder="New lname" value={lname} onChange={(e) => setLname(e.target.value)} />
      <input type="email" placeholder="New email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={updateData}>Update the details</button> */}


      First Name<br/>
           <input  className='inputs_data' placeholder="Email" 
                 defaultValue={Email}
                 onChange={(e) => setEmail(e.target.value)}/><br/>
                 last Name<br/>
                <input  className='inputs_data' placeholder="Pasword"
                 defaultValue={Password}
                 onChange={(e) => setPassword(e.target.value)}/><br/>
                Email<br/>
               
                 <button className="Logbutton" onClick={updateData}>Update</button>


      {/* {message && <p>{message}</p>} */}
    </div>
  );
}

export default UpdateUser;