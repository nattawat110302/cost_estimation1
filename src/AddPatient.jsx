import AppHeader from './components/AppHeader';
import './App.css';
// import Select from "react-dropdown-select";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';

function AddPatient() {
    const [value, setValue] = useState("Select option...");

    const options = [
        {
            id: 1,
            name: "Leanne Graham",
            className: "textfield-basic"
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
                <h3>Add Patient Information</h3>
            </div>
            <div className="form-addpatient" >
                <div className='text-header'>
                    <label>First Name</label><br />
                    <div className="form-controlp">
                        <input className="textfield-basic" type="text" autoFocus="true"></input>
                    </div>
                    <label>Last Name</label>
                    <div className="form-controlp">
                        <input className="textfield-basic" type="text" ></input>
                    </div>
                    <label>Date of birth</label>
                    <div className="form-controlp">
                        <input className="textfield-basic" type="date" ></input>
                    </div>
                    <label>Underlying Disease</label>
                    <div className="Search4">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={value}
                            handleChange={(val) => setValue(val)}
                        />
                        {/* <Select options={options} labelField="name" valueField="id" /> */}
                        {/* <Select options={options} labelField="name" valueField="id" onChange={(values) => this.setValues(values)} /> */}
                    </div>
                </div>
                <div class="Cancelbutton">
                    <button class="Button" id="cancel"onClick={(e) => link_selectoperation()} style={{ cursor: 'pointer' }}>Cancel</button>
                </div>
                <div class="Submitbutton">
                    <button class="Button" id="submit"onClick={(e) => link_selectoperation()} style={{ cursor: 'pointer' }}>Submit</button>
                </div>

            </div>
        </div>
    );
};
function link_addpatient() {
    window.location.assign("/addpatient")
}
function link_selectoperation() {
    window.location.assign("/selectoperation")
}
export default AddPatient;