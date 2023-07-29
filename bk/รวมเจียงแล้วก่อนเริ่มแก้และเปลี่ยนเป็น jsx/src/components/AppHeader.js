import React from 'react';
import './AppHeader.css';

function AppHeader() {
    return (
        <header className = "app-header" >
            <img className="app-header-logo" src="/images/logo 2.png" alt="logo" />
            <img className="app-header-profile" src="/images/Profile.png" alt="Profile"/>
            <h2>Cost Estimation for Procedure</h2>
        </header >
    );
}

export default AppHeader;