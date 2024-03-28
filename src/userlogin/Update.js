// import{useEffect,useState}from 'react';
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// function Update(){
//   const [users,setUsers]=useState([])
//   useEffect(()=>{
// axios.get('http://localhost:3050/getUsers')
// .then(users=>setUsers(users.data))
// .catch(err=>console.log(err))
//   },[])
//   return(
//     <div className=''>
//       <div className='w-50'>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>
//               Name
//             </th>
//             <th>
//               Email
//             </th>
//             <th>
//               MobileNumber
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map(user=>{
//              return <tr>
//                 <td>{user.name}</td>
//                       <td>{user.Email}</td>
//                 <td>{user.MobileNumber}</td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//       </div>
//     </div>
  
//   )
// }
// export  default Update;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Update() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [updatedUser, setUpdatedUser] = useState({
//     name: '',
//     Email: '',
//     mobileNumber: '',
//   });

//   useEffect(() => {
//     axios.get('http://localhost:3050/getUsers')
//       .then(users => setUsers(users.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setUpdatedUser({
//       name: user.name,
//       email: user.Email,
//       mobileNumber: user.MobileNumber,
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:3050/updateUser/${selectedUser.id}`, updatedUser);
//       console.log('User details updated successfully');
//       // Refresh the user list after updating
//       axios.get('http://localhost:3050/SignUp')
//         .then(users => setUsers(users.data))
//         .catch(err => console.log(err));
//     } catch (error) {
//       console.error('Error updating user details:', error);
//     }
//   };

//   return (
//     <div className=''>
//       <div className='w-50'>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>MobileNumber</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id} onClick={() => handleUserClick(user)}>
//                 <td>{user.name}</td>
//                 <td>{user.Email}</td>
//                 <td>{user.MobileNumber}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {selectedUser && (
//           <form onSubmit={handleFormSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 value={updatedUser.name}
//                 onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="email"
//                 value={updatedUser.Email}
//                 onChange={(e) => setUpdatedUser({ ...updatedUser, Email: e.target.value })}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="mobileNumber"
//                 value={updatedUser.MobileNumber}
//                 onChange={(e) => setUpdatedUser({ ...updatedUser, MobileNumber: e.target.value })}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">Update User</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Update;















// update profilecode
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css';

 function Update () {
 
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
    
    <div  className="container9">
    <div className="auth-wrapper">
      <div className="auth-inner">
      


        <nav id="bar1">
          <ul>
            <h2 id="H2">Expense Tracker</h2>
          
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/Transactions">Transactions</Link></li>
            <li><Link to="/Reports">Reports</Link></li>
            <li><Link to="/Reports">Budgets</Link></li>
            <li><Link to="/Goals">Goals</Link></li>
            <li><Link to="/Reports">Learn</Link></li>

          </ul>
        </nav>

        <div class="profile">

          <form onSubmit={handleSubmit}>
            <h1 id="BAR2">Settings</h1>
            <div class="profile1">
              <h4 id="BAR2"> Profile</h4>


              <label>Email</label>
              <input placeholder="Email" className="form-control"
                onChange={(e) => setEmail(e.target.value)} />
              {/* <button onClick={updateData}>Update</button> */}
              <button id="change">change</button>
              <label>Password</label>
              <input placeholder="password" className="form-control"
                onChange={(e) => setPassword(e.target.value)} />
              <button id="change">change</button>
              <h4 id="BAR4">Preferences</h4>
              <div class="profile2">
                <p id="Bar3">Transaction Notifications</p>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="profile3">
                <p id="Bar3">Weekly Summary</p>
                <label class="switch1">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="profile4">
                <p id="Bar3">Product Updates</p>
                <label class="switch2">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="save1">
                <button id="Save">Save changes</button>
              </div>


            </div>
          </form>
        </div>
      </div>
</div>
</div>
)
}
export default Update;