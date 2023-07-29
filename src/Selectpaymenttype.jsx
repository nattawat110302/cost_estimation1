import './App.css';
import Selectpaymenttypehave from './Selectpaymenttypehave';
import AppHeader from './components/AppHeader';
import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';


function Selectpaymenttype() {
    const [value, setValue] = useState("");
    const [specMedsupValue, setspecMedsupValue] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const [actualPrice, setActualPrice] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    
    const handleVerify = () => {
        setIsPopupOpen(true);
    };

    const handleCancel = () => {
        setIsPopupOpen(false);
        setSelectedOption("");
    };

    const handleConfirm = () => {
        setIsPopupOpen(false);
        // console.log(`Verification confirmed with actual price: ${actualPrice} Baht`);
        // console.log(`Selected option: ${selectedOption}`);
        link_CostEstimateDraftBlock();
    };

    const renderSpecMedContent = () => {
        if (selectedOption === "exist") {
            return (
                <div>
                    <h3>Special Medical Supply</h3>
                    <div className="Search3">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={specMedsupValue}
                            handleChange={(val) => setspecMedsupValue(val)}
                        />
                    </div>
                </div>
            );
        } else if (selectedOption === "nonexist") {
            return (
                <div calss="specmedform" style={{ textAlign: 'left' }}>
                    <p class="marg-left20">Special Medical Supply Name</p>
                    <input type="text" class="TextField" id="specmedsupname" />
                    <div className="line">
                        <p class="marg-left20">Special Medical Supply Price</p>
                        <p class="label-back">Company</p>
                    </div>
                    <div className="line">
                    <input type="number" id="specmedsupprice" className="TextField" />
                    <input type="text" id="specmedcompany" className="TextField" />
                    </div>

                    
                </div>
            );
        } else {
            return null;
        }
    };
    
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
                    <input type="radio" id="do" name="medclerance" onClick={link_Selectpaymenttypehave}></input>
                    <label htmlFor="do" className="marg-left10">Have Insurance</label>
                    <input type="radio" id="donotdo" className="marg-left20" name="medclerance" checked="checked"></input>
                    <label htmlFor="donotdo" className="marg-left10" >Don’t have Insurance</label>

                    <h3>Payment Type</h3>
                    <div class="Search2">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={value}
                            handleChange={(val) => setValue(val)}
                        />
                    </div>

                    {/* <div class="spacemini2">
                        <input className="textfield-login" type="text" autoFocus="true"></input>
                    </div> */}
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
                    <button className="Button Backbutton" onClick={(e) => link_Noteandconfirmcreate()} style={{ cursor: 'pointer' }}>Back</button>
                    <button className="Button Nextbutton" onClick={(e) => handleVerify()} style={{ cursor: 'pointer' }}>Next</button>
                </div>
            </div>
            {/*  */}
            {isPopupOpen && (
                <div className="custom-popup">
                    <center>
                        <h2>Confirm to Create Draft Cost Estimation Sheet</h2>
                        {/* <input
                            type="radio"
                            id="exist"
                            name="smsupply"
                            checked={selectedOption === "exist"}
                            onChange={() => setSelectedOption("exist")}
                        />
                        <label htmlFor="exist" className="marg-left10">Existed</label>
                        <input
                            type="radio"
                            id="nonexist"
                            className="marg-left20"
                            name="smsupply"
                            checked={selectedOption === "nonexist"}
                            onChange={() => setSelectedOption("nonexist")}
                        />
                        <label htmlFor="nonexist" className="marg-left10">Non Existed</label> */}
                        <br />
                        <div className="specmed">
                            {renderSpecMedContent()}
                        </div>
                        <div class="popbuttonblock">
                            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                            <button className="confirm-button" onClick={handleConfirm} >Confirm</button>
                        </div>
                    </center>
                </div>
            )}
            {/*  */}
        </div>

    );
}
function link_Selectpaymenttypehave() {
    window.location.assign("/Selectpaymenttypehave")
}
function link_Noteandconfirmcreate() {
    window.location.assign("/Noteandconfirmcreate")
}
function link_CostEstimateDraftBlock() {
    window.location.assign("/CostEstimateDraftBlock")
}
export default Selectpaymenttype;
