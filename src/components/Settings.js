// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Switch from '@mui/material/Switch';

// function Settings() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [transactionNotifications, setTransactionNotifications] = useState(false);
//     const [weeklySummary, setWeeklySummary] = useState(false);
//     const [productUpdates, setProductUpdates] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://localhost:3050/updateUser", {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                 },
//                 body: JSON.stringify({
//                     email,
//                     password,
//                     transactionNotifications,
//                     weeklySummary,
//                     productUpdates
//                 }),
//             });
//             const data = await response.json();

//             if (response.ok) {
//                 alert("User data updated successfully");
//             } else {
//                 alert("Failed to update user data. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error updating user data:", error);
//             alert("An error occurred while updating user data. Please try again later.");
//         }
//     }

//     return (
//         <>
//             <Navbar />
//             <div className="container d-flex justify-content-center align-items-center py-2">
//                 <form onSubmit={handleSubmit} style={{ width: "500px" }} className="border p-5 rounded">
//                     <h1 className="text-left">Settings</h1>
//                     <h4> Profile</h4>
//                     <div className="form-group">
//                         <div className="d-flex align-items-center justify-content-between">
//                             <input type="email" className="form-control" placeholder="Email"
//                                 value={email} onChange={(e) => setEmail(e.target.value)} />
//                             <button type="button" className="btn btn-primary" onClick={() => setEmail("")}>Change</button>
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="d-flex align-items-center justify-content-between">
//                             <input type="password" className="form-control" placeholder="Password"
//                                 value={password} onChange={(e) => setPassword(e.target.value)} />
//                             <button type="button" className="btn btn-primary" onClick={() => setPassword("")}>Change</button>
//                         </div>
//                     </div>
//                     <h4>Preferences</h4>
//                     <div className="form-switch d-flex align-items-center justify-content-between">
//                         <p className="mb-0">Transaction Notifications</p>
//                         <Switch checked={transactionNotifications} onChange={() => setTransactionNotifications(!transactionNotifications)} />
//                     </div>
//                     <div className="form-switch d-flex align-items-center justify-content-between">
//                         <p className="mb-0">Weekly Summary</p>
//                         <Switch checked={weeklySummary} onChange={() => setWeeklySummary(!weeklySummary)} />
//                     </div>
//                     <div className="form-switch d-flex align-items-center justify-content-between">
//                         <p className="mb-0">Product Updates</p>
//                         <Switch checked={productUpdates} onChange={() => setProductUpdates(!productUpdates)} />
//                     </div>
//                     <button type="submit" className="btn btn-success mt-3">Save changes</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Settings;
