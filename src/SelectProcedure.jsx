import AppHeader from './components/AppHeader';
import './App.css';


import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';

function Selectprocedure() {
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
            <div class="pinfo-head">
                <label class="pinfo head">Patient Info</label><br />
            </div>
            <div class="Information">
                <label class="pinfo attribute" >ID :</label>
                <label class="pinfo">0000000000</label>
                <label class="pinfo attribute">Fullname :</label>
                <label class="pinfo">Somphong Madee</label>
                <label class="pinfo attribute">Age :</label>
                <label class="pinfo">50</label><br />

            </div>

            <div class="container">
                <div class="left">
                    <h3>ICD-9 Code</h3>
                    <div class="flex">
                        <div class="Search2">
                            <SearchableDropdown
                                options={searchdata}
                                label="name"
                                id="id"
                                selectedVal={value}
                                handleChange={(val) => setValue(val)}
                            />
                        </div>
                    </div>
                    <h3>Procedure</h3>
                    <div class="Search2">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={value}
                            handleChange={(val) => setValue(val)}
                        />
                    </div>
                    {/* <h3>Template's Detail</h3> */}
                    {/* <div class="spacemini">

                    </div> */}
                </div>
                <div class="right">
                    <h3>Disease Name</h3>
                    <div class="Search2">
                        <SearchableDropdown
                            options={searchdata}
                            label="name"
                            id="id"
                            selectedVal={value}
                            handleChange={(val) => setValue(val)}
                        />
                    </div>
                    {/* <h3>Medical Supply List</h3> */}
                    <div class="spaceright3">
                        <div className="text-column">
                            <label>Disease Name</label>
                        </div>
                        <div className="text-column">
                            <label>ICD-9 Code</label>
                        </div>
                    </div>
                </div>
                <div class="buttonContainer2">
                    <button className="Button Backbutton" onClick={(e) => link_costestimateblock()} style={{ cursor: 'pointer' }}>Back</button>
                    <button className="Button Nextbutton" onClick={(e) => link_costestimateblock()} style={{ cursor: 'pointer' }}>Next</button>
                </div>
            </div>
        </div>
    );
};
function link_costestimateblock() {
    window.location.assign("/CostEstimateBlock")
}
export default Selectprocedure;