import AppHeader from './components/AppHeader';
import './App.css';
import Select from "react-dropdown-select";
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Adduser() {
    const options = [
        {
            id: 1,
            name: "Leanne Graham"
        },
        {
            id: 2,
            name: "Ervin Howell"
        }
    ];


    return (
        <div className="bg">
            <style>{'body { background-color: #C7DAEF; }'}</style>
            <div className="Header">
                <AppHeader />
            </div>
            <div className="title">
                <h3>Register</h3>
            </div>
            <div className="formadduser" >

                <div className="form-control">
                    <div className="registertext">
                        <label>First Name</label><br />
                    </div>
                    <input className="textfield-basic" type="text" autoFocus="true"></input>
                </div>

                <div className="form-controllast">
                    <div className="registertext">
                        <label>Last Name</label><br />
                    </div>
                    <input className="textfield-basic" type="text" ></input>
                </div>

                <div className="form-control">
                    <div className="registertext">
                        <label>User Name</label><br />
                    </div>
                    <input className="textfield-basic" type="text" ></input>
                </div>

                <div className="form-controllast">
                    <div className="registertextinfo">
                        <label>Email Address</label>
                        <Popup trigger={<img className="infoimg" src="/images/information_icon.png" alt="information" style={{ cursor: 'pointer' }}/>} position="right center" >
                            <div className="popup-information">
                            the system will use email as a channel. Announcing various news from the system.
                            </div>
                        </Popup>

                        {/* <img className="infoimg" src="/images/information_icon.png" alt="information" /><br /> */}
                    </div>
                    <div className="warning">
                        <input className="textfield-basic" type="email" placeholder="example@gmail.com"></input>
                        <img className="infoimg" src="/images/red_alert_icon.png" alt="information" />
                        <label>Email is Invalid</label><br />
                    </div>
                </div>

                <div className="form-control">
                    <div className="registertext">
                        <label>Password</label><br />
                    </div>
                    <input className="textfield-basic" type="text" ></input>
                </div>

                <div className="form-controllast">
                    <div className="registertext">
                        <label>Confirm Password</label><br />
                    </div>
                    <div className="warning">
                        <input className="textfield-basic" type="text" ></input>
                        <img className="infoimg" src="/images/red_alert_icon.png" alt="information" />
                        <label>Passwords do not match</label><br />
                    </div>
                </div>


                <div class="Cancelbutton-adduser">
                <Link to="/login"><button class="Button" id="cancel" style={{ cursor: 'pointer' }}>Cancel</button></Link>
                </div>
                <div class="Submitbutton-adduser">
                <Link to="/login"><button class="Button" id="submit" style={{ cursor: 'pointer' }}>Submit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Adduser;