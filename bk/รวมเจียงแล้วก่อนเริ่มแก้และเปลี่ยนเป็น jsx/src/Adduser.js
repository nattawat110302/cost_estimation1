import AppHeader from './components/AppHeader';
import './App.css';
import Select from "react-dropdown-select";

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
                    <input type="text" autoFocus="true"></input>
                </div>

                <div className="form-controllast">
                    <div className="registertext">
                        <label>Last Name</label><br />
                    </div>
                    <input type="text" ></input>
                </div>

                <div className="form-control">
                    <div className="registertext">
                        <label>User Name</label><br />
                    </div>
                    <input type="text" ></input>
                </div>

                <div className="form-controllast">
                    <div className="registertextinfo">
                        <label>Email Address</label>
                        <img className="infoimg" src="/images/information_icon.png" alt="information" /><br />
                    </div>
                    <div className="warning">
                        <input type="email" ></input>
                        <img className="infoimg" src="/images/red_alert_icon.png" alt="information" />
                        <label>Email is Invalid</label><br />
                    </div>
                </div>

                <div className="form-control">
                    <div className="registertext">
                        <label>Password</label><br />
                    </div>
                    <input type="password" ></input>
                </div>

                <div className="form-controllast">
                    <div className="registertext">
                        <label>Confirm Password</label><br />
                    </div>
                    <div className="warning">
                        <input type="password" ></input>
                        <img className="infoimg" src="/images/red_alert_icon.png" alt="information" />
                        <label>Passwords do not match</label><br />
                    </div>
                </div>


                <div class="Cancelbutton">
                    <button class="Button" id="cancel">Cancel</button>
                </div>
                <div class="Submitbutton">
                    <button class="Button" id="submit">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Adduser;