import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SelectPatient from './Selectpatient';
import EstimationBLock from './costestimateblock';
import AddPatient from './AddPatient';
import Selectoperation from './Selectoperation';
import Adduser from './Adduser';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <EstimationBLock /> */}
    {/* <SelectPatient /> */}
    {/* <AddPatient /> */}
    {/* <Adduser /> */}
    {/* <Selectoperation /> */}
    {/* <Login /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
