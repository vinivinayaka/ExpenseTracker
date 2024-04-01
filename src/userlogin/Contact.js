
import React from "react";
import Swal from "sweetalert2";
import './Login.css';

export function Contact(){
  const handleClick=()=>{
    Swal.fire({
      title: "Custom width, padding, color, background.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });

}
  return(
    <div>
    <h1>THis is Contact component</h1>
    <button className="Logbutton" onClick={handleClick}> Alert !  </button>
    </div>
  )
}
export default Contact;