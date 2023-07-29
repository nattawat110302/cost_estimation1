import './App.css';
import AppHeader from './components/AppHeader';
import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';

function SelectorCreateTemplate() {
    const [value, setValue] = useState("");
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
                    <h3>Template name</h3>
                    <div class="flex">
                        <div class="Search" id="leftsides">
                            <SearchableDropdown
                                options={searchdata}
                                label="name"
                                id="id"
                                selectedVal={value}
                                handleChange={(val) => setValue(val)}
                            />
                        </div>
                        <button class="Button" id="nexttob" onClick={(e) => link_CreateTemplate()} style={{ cursor: 'pointer' }}>Create</button>
                    </div>
                    <div class="Time">
                        {HourDropdown()}
                    </div>
                    <h3>Medical Supply name</h3>
                    <div class="Search2" id="leftsides2 ">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={value}
                            handleChange={(val) => setValue(val)}
                        />
                    </div>
                    <div class="spacemini">

                    </div>
                </div>
                <div class="right">
                    <h3>Template's Detail</h3>
                    <div class="spaceright">

                    </div>
                </div>
                <div class="buttonContainer2">
                    <button className="Button Backbutton" onClick={(e) => link_costestimatedraftblock()} style={{ cursor: 'pointer' }}>Cancel</button>
                    <button className="Button Nextbutton" onClick={(e) => link_CostEstimationDetail()} style={{ cursor: 'pointer' }}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

function HourDropdown() {
    const [selectedHour, setSelectedHour] = useState(1);
    const [selectedMinute, setSelectedMinute] = useState(0);

    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const handleMinuteChange = (event) => {
        setSelectedMinute(event.target.value);
    };

    const renderOptions = (start, end) => {
        const options = [];
        for (let i = start; i <= end; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    return (
        <div>
            <label htmlFor="hourSelect" class="margin-right-10">Select an Hour:</label>
            <select id="hourSelect" class="margin-right-10" value={selectedHour} onChange={handleHourChange}>
                {renderOptions(1, 24)}
            </select>

            <label htmlFor="minuteSelect" class="margin-right-10">Select Minutes:</label>
            <select id="minuteSelect" class="margin-right-10" value={selectedMinute} onChange={handleMinuteChange}>
                {renderOptions(0, 59)}
            </select>

            <p >Selected Time: {selectedHour}:{selectedMinute < 10 ? `0${selectedMinute}` : selectedMinute}</p>
        </div>
    );
}
function link_CreateTemplate() {
    window.location.assign("/CreateTemplate")
}
function link_costestimatedraftblock() {
    window.location.assign("/CostEstimateDraftBlock")
}
function link_CostEstimationDetail() {
    window.location.assign("/CostEstimationDetail")
}
export default SelectorCreateTemplate;
