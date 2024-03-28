import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import "./App.css";
import Alert from './components/Alert';
import Content from './Content';



const AdminHome = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 5000);

  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Content />

    </>
  );
};

export default AdminHome;
