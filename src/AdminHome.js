import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import "./App.css";
import Alert from './components/Alert';
import Content from './Content';
// import { Alert } from '@mui/material';


const AdminHome = () => {

 
  return (
    <>
     
        <Navbar />
        <Alert alert={alert} />
      <Content />
    
    </>
  );
};

export default AdminHome;
