// export const Contact=()=>{
//     return(
//         <section class="contact" id="contact">
//     <div className="">
//       <div className="Contact1">
//       <h2 className="title">Contact Me</h2>
//     </div>
//       <div className="contact-content">
//         <div className="column left">
//           <div className="Gets1">
//           <div className="text">Get in Touch</div>
//           </div>
//         <div className="Got1">
//           <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll happy to answer your questions and set up a meeting with you.</p>
//         </div>
//           <div className="Text-box1">
//           <div className="icons">

//             <a href="#">
//               <div className="row">
//                 <i className="fa-solid fa-user-large"></i>
//                 <div className="info">
//                   <div className="head">Name</div>
//                   <div className="sub-title"><a href="#" >Srinivasulu Erugu</a></div>
//                 </div>
//               </div>
//             </a>

//             <div className="row">
//               <i className="fa-solid fa-location-dot"></i>
//               <div className="info">
//                 <div className="head"> Address</div>
//                 <div className="sub-title"> Naidupeta,Ap India.</div>
//               </div>
//             </div>

//             <div className="row">
//               <i className="fa-solid fa-envelope"></i>
//               <div className="info">
//                 <div className="head">Email</div>
//                 <div className="sub-title"><a href="mailto:#">Srinivaserugu987@gmail.com</a></div>
//               </div>
//             </div>

//             <div className="row">
//               <i className="bi bi-translate"></i>
//               <div className="info">
//                 <div className="head">Language Known</div>
//                 <div className="sub-title">Hindi, English, Telugu </div>
//               </div>
//             </div>

//             <br></br>
//           </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div className="column right">
//         <div className="Text-field1">
//           <div className="text">Message me</div>
          
//             <div className="fields">
//               <div className="field name">
//               <div className="form">
//                 <input type="text" placeholder="Your Name" required ></input>
//               </div>
//               <div className="field email">
//                 <input type="email" placeholder="Your Email" required></input>
//               </div>
//             </div>
//             <div className="field">
//               <input type="text" placeholder="Subject" required></input>
//             </div>
//             <div className="field textarea">
//               <textarea cols="30" rows="10" placeholder="Message.."required></textarea>
//             </div>
//           </div>
//           <div className="btn1">
//             <div className="button-area">
//               <div className="send">
//               <button type="submit">Send message</button>
//               </div>
//             </div>
//           </div>
//           </div>
//       </div>
//        </section>

//     )
// }
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
    <button onClick={handleClick}> Alert !  </button>
    </div>
  )
}
export default Contact;