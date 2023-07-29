import './App.css';
import AppHeader from './components/AppHeader';
// import SearchableDropdown from './components/SearchableDropdown';
// import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';

function Noteandconfirmcreate() {
    // const [value, setValue] = useState("");
    return (
        <div class="bg">
            <div class="Header">
                <AppHeader />
            </div>
            <div class="pinfo-head">
                <label class="pinfo head">Patient Info</label><br />
            </div>
            <div class="Information">
                <label class="pinfo attribute" >ID :</label>
                <label class="pinfo">0000000000</label>
                <label class="pinfo attribute">Fullname :</label>
                <label class="pinfo">Somphong Madee</label>
                <label class="pinfo attribute">Age :</label>
                <label class="pinfo">50</label>
                <label class="pinfo attribute">ICD-9 Code :</label>
                <label class="pinfo">------</label>
                <label class="pinfo attribute">Procedure Name :</label>
                <label class="pinfo">------</label><br />
            </div>
            <div class="container">
                <div class="left">
                    <h3>Note</h3>
                    <div class="spacemini2">
                        {/* <input className="textfield-login" type="text" autoFocus="true"></input> */}
                    </div>
                </div>
                <div class="right">
                    <div class="spaceright4">
                        <div className="container-right">
                            <div className="text-column2">
                                <div className="head-text-column2">
                                    <label>List</label><br />
                                </div>
                                <div>
                                    <div className="basic-text-column2">
                                        <label>Physician Procedure Fee</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>Doctor Fee</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>Anesthetic Professional Fee</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>Operation Theater and Delivery Room</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>Medication Fee</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>Accommodation</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>Total Estimative expense</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>Deposit</label><br />
                                    </div>
                                    </div>
                                    <div className="text-column2">
                                </div>
                            </div>
                            <div className="text-column-un">
                                <div className="head-text-column2">
                                    <label>Price</label><br />
                                </div>
                                <div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                    <div className="basic-text-column2">
                                        <label>XXXX.XX</label><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttonContainer2">
                    <button className="Button Backbutton" onClick={(e) => link_CostEstimationDetail()} style={{ cursor: 'pointer' }}>Back</button>
                    <button className="Button Nextbutton" onClick={(e) => link_Selectpaymenttype()} style={{ cursor: 'pointer' }}>Next</button>
                </div>
            </div>
        </div>
    );
}
function link_Selectpaymenttype() {
    window.location.assign("/Selectpaymenttype")
}
function link_CostEstimationDetail() {
    window.location.assign("/CostEstimationDetail")
}
export default Noteandconfirmcreate;
