import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext'; // Assuming you have AppContext defined in AppContext.js

ReactDOM.render(
  <React.StrictMode>

      <AppProvider>
        <App />
      </AppProvider>
 
  </React.StrictMode>,
  document.getElementById('root')
);
