import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";

function SelectorCreateTemplate() {
    const [doctorValue, setDoctorValue] = useState("");
    const [patientTypeValue, setPatientTypeValue] = useState("");
    const [roomTypeValue, setRoomTypeValue] = useState("");
    const [specMedsupValue, setspecMedsupValue] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [actualPrice, setActualPrice] = useState("");
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
        console.log(`Verification confirmed with actual price: ${actualPrice} Baht`);
        console.log(`Selected option: ${selectedOption}`);
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
        <div className="bg">
            <div className="Header">
                <AppHeader />
            </div>
            <div className="pinfo-head">
                <label className="pinfo head">Patient Info</label><br />
            </div>
            <div className="Information">
                <label className="pinfo attribute">ID :</label>
                <label className="pinfo">0000000000</label>
                <label className="pinfo attribute">Fullname :</label>
                <label className="pinfo">Somphong Madee</label>
                <label className="pinfo attribute">Age :</label>
                <label className="pinfo">50</label>
                <label className="pinfo attribute">ICD-9 Code :</label>
                <label className="pinfo">------</label>
                <label className="pinfo attribute">Procedure Name :</label>
                <label className="pinfo">------</label><br />
            </div>
            <div className="container">
                <div className="left">
                    <h3>Doctor</h3>
                    <div className="Search2">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={doctorValue}
                            handleChange={(val) => setDoctorValue(val)}
                        />
                    </div>
                    <h3>Patient Type</h3>
                    <div className="Search2">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={patientTypeValue}
                            handleChange={(val) => setPatientTypeValue(val)}
                        />
                    </div>
                    <div className="line">
                        <h3>Room Type</h3>
                        <h3 id="daylabel">Days</h3>
                    </div>
                    <div className="line">
                        <div className="Search3">
                            <SearchableDropdown
                                options={searchdata}
                                label="name"
                                id="id"
                                selectedVal={roomTypeValue}
                                handleChange={(val) => setRoomTypeValue(val)}
                            />
                        </div>
                        <input type="text" id="daytxtbox" />
                    </div>
                    <h3>Special Medical Supply</h3>
                    <button className="Button" id="verify" onClick={handleVerify}>
                        ADD
                    </button>
                    <h3>Medical Clerance</h3>
                    <input type="radio" id="do" name="medclerance"></input>
                    <label htmlFor="do" className="marg-left10">Do</label>
                    <input type="radio" id="donotdo" className="marg-left20" name="medclerance"></input>
                    <label htmlFor="donotdo" className="marg-left10">Don't do</label>
                </div>
                <div className="right">
                    <h3>Cost Estimation Detail</h3>
                    <div className="spaceright">
                    </div>
                </div>
                <div className="buttonContainer2">
                    <button className="Button Backbutton">Cancel</button>
                    <button className="Button Nextbutton">Confirm</button>
                </div>
            </div>
            {isPopupOpen && (
                <div className="custom-popup">
                    <center>
                        <h2>ADD SPECIAL MEDICAL SUPPLY</h2>
                        <input
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
                        <label htmlFor="nonexist" className="marg-left10">Non Existed</label>
                        <br />
                        <div className="specmed">
                            {renderSpecMedContent()}
                        </div>
                        <div class="popbuttonblock">
                            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                            <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </center>
                </div>
            )}
        </div>
    );
}

export default SelectorCreateTemplate;
