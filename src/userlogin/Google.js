import React ,{useState,useEffect}from 'react'
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";
import{Link} from "react-router-dom";

// import Google from './Google.css'
import './Login.css';
firebase.initializeApp({
  apiKey: "AIzaSyCENZb60T9pfX7VuZlOve5F--fRGAOQTME",
  authDomain: "project-5274c.firebaseapp.com",
  projectId: "project-5274c",
  storageBucket: "project-5274c.appspot.com",
  messagingSenderId: "603112708268",
  appId: "1:603112708268:web:cd0e909bc29ddd65a6a709",
  measurementId: "G-ZQVP7N2YKV"

})
const auth = firebase.auth();

const Google = () => {
 const [user,setUser]=useState(null);
 
 useEffect(()=>{
  auth.onAuthStateChanged(person=> {
    if(person){
      setUser(person);
     
    }
    else{
      
      setUser(null);
     
     
     
    }
  })
 })
  const signInWithGoogle = async () => {
try{
  await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  alert("your Now Loggin")
}

catch(err){
  
  console.log(err);
 
 
   
}
  }
  return(
    <div>
      <center>
        {user ?
          <div>
          
          <Link className='links_1' to="/SignUp"><button className="Logbutton" onClick={()=>auth.signOut()} id="Author">LogOut</button></Link>
          </div>
         :
      <Link className='links_1' to="/AdminHome" > <button className="Logbutton" onClick={signInWithGoogle} id="SignOut"></button></Link>
     
}
      </center>
    </div>
  )
}
export default Google