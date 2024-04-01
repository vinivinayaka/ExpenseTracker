

import { CircleUserRound} from 'lucide-react';

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export default function Home() {
  const handleClick=()=>{
    Swal.fire("Are YOU Sure TO LOGIN");

}
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./Login";
  };



  useEffect (() =>{
    fetch("http://localhost:3050/userData",{
        method : "POST",
        crossDomain : true,
        headers:{
            "Content-type": "application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
         body:JSON.stringify({
            token : window.localStorage.getItem('token'),
         }),
        })
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
            setUserData(data.data);
            
        });

},[]);

  return(
    <div>
      <h2>WELCOME TO OUR BLOG...</h2>
      {/* <marquee> WELCOME TO HOME USER.....!<CircleUserRound onClick={()=>navigate("./Update",{state:userData})}></CircleUserRound></marquee> */}
      {/* Name<h1>{userData.name}</h1>
      Password<h1>{userData.Password}</h1>

      Email<h1>{userData.Email}</h1> */}
{/* <b id="home"><Google></Google>SignOut</b> */}
   <button className="Logbutton" onClick = {handleClick}>LOGIN</button>
   <button1 onClick = {logOut}>LOGIN</button1>
 
     </div>
  )
}