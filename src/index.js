import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/Poppins/Poppins-Bold.ttf';
import './fonts/Poppins/Poppins-Regular.ttf';
import './fonts/Poppins/Poppins-SemiBold.ttf';
import './fonts/Roboto/Roboto-Regular.ttf';
import './fonts/SF-Pro-Display/SF-Pro-Display-Medium.ttf';
import './fonts/SF-Pro-Display/SF-Pro-Display-Semibold.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
