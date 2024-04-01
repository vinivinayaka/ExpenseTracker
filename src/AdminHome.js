import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import "./App.css";

import Content from './Content';


const AdminHome = () => {
 
  return (
    <>
     
        <Navbar />
      <Content />
    
    </>
  );
};

export default AdminHome;
