import './App.css';
import ShowAndHidePassword from './components/ShowAndHidePassword';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
    const [selectedItem, setSelectedItem] = React.useState(null);
    
    const handleItemClick = (index, e) => {
        if (e.target.tagName === 'INPUT') {
          // If the click is on the checkbox, only handle checkbox behavior
          setSelectedItem(index);
        } else {
          // If the click is outside the checkbox, navigate the link
          // Here, you can replace "/selectorcreatetemplate.js" with your desired link URL
          window.location.href = "/selectorcreatetemplate";
        }
      };

    
    return (
        <div class="border">
            <div class="login_bg">
                <div class="logo">
                    <img className="app-logo" src="/images/logo 1.png" alt="logo" />
                </div>
                <div className="formlogin" >
                    <div className='text-header'>
                        <label>Username</label><br />
                        <div className="form-control-login">
                            <input className="textfield-login" type="text" autoFocus="true" ></input>
                        </div>
                        <label>Password</label>
                        <div className="form-control-login">
                            {/* <input className="textfield-login" type="password" ></input> */}
                            <ShowAndHidePassword />
                        </div>
                    </div>
                    <div className="text-link">
                    {/* <Link to="/Adduser">Create new account</Link> */}
                        {/* <label>Create new account</label> */}
                        {/* <label  onClick={link_adduser} >Create new account</label> */}
                        <label  onClick={(e) => link_adduser()} style={{ cursor: 'pointer' }} >Create new account</label>
                    </div>
                    <div className="text-link">
                        <label>Forgot password?</label>

                    </div>
                </div>
                <div class="Loginbutton">
                {/* <Link to="/Selectoperation"><button class="Button" id="login" style={{ cursor: 'pointer' }}>Login</button></Link> */}
                <button class="Button" id="login" onClick={(e) => link_selectoperation()} style={{ cursor: 'pointer' }}>Login</button>
                </div>
                
            </div>
        </div>
    );
}

function link_adduser() {
    window.location.assign("/adduser")
}
function link_selectoperation() {
    window.location.assign("/selectoperation")
}

export default Login;