import { Link } from "react-router-dom";
// import { CircleUserRound} from 'lucide-react';
import "firebase/compat/auth";
import React ,{useState,useEffect}from 'react'
import firebase from 'firebase/compat/app';
import "firebase/compat/database";


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

export default function Navbar() {
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
//    const signInWithGoogle = async () => {
//  try{
//    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//    alert("your Now Loggin")
//  }
 
//  catch(err){
   
//    console.log(err);
  
  
    
//  }
//    }
  
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Savvy Money</h1>
        <div className="menu">
          <Link to="/Dashboard" className="menu-link">Dashboard</Link>
          <Link to="/Transactions" className="menu-link">Transactions</Link>
          <Link to="/Budgets" className="menu-link">Budgets</Link>
          <Link to="/Reports" className="menu-link">Reports</Link>
          <Link to="/Settings" className="menu-link">Settings</Link>
          
          <button aria-label="Help" className="menu-btn">
          <Link to="/help" className="menu-link"> ⚙️</Link>
          {/* <FileQuestionIcon className="menu-icon" /> */}
          </button>
          {user ?
            <div>
              <Link to="/"><button className="Logbutton bg-danger" onClick={() => auth.signOut()} >Logout</button></Link>
            </div>
            :
            // <Link to="/AdminHome" > <button className="Logbutton" onClick={signInWithGoogle} ></button></Link>
            <Link to="/"><button className="Logbutton bg-danger" onClick={() => auth.signOut()} >Logout</button></Link>
            
          }
          {/* <Link to="/SignUp" id="Author" className="Logbutton" onClick={handleClick}><Google></Google></Link>  */}
        </div>
      </nav>
    </>
  );
}

function FileQuestionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
      <path d="M12 17h.01" />
    </svg>
  );
}
