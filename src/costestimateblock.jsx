import './App.css';
import AppHeader from './components/AppHeader';
import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function CostEstimateBlock() {
    const [value, setValue] = useState("Select option...");
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
            </div>
            <div class="Search" id="toprights">
                {/* <Search /> */}
                <SearchableDropdown
                    options={searchdata}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                />
            </div>
            <div class="space">
                <div class="display">
                    {BLock()}
                </div>
                <div class="button">
                    <button class="roundbutton" id="addbutton">+</button>
                </div>
            </div>
            <div class="Backbutton">
                <button class="Button" id="back">Back</button>
            </div>
        </div>
    );
}
function BLock() {
    let data = [
        {
            name: "MAINBOARD 1700 MSI PRO H6 DDR4",
            price: 2790
        },
        {
            name: "POWER SUPPLY AEROCOOL AE650 - 650W 80 PLUS",
            price: 1700
        },
    ];
    if (data.length == 0) {
        return (
            <label></label>
        );
    } else {
        const listItems = data.map(
            (element) => {
                return (
                    <ul type="disc">
                        <li class="Item-li">
                            {element.name}<br />
                            {element.price}
                        </li>
                    </ul>
                )
            }
        )
        return (
            <div class="items">
                {listItems}
            </div>
        )
    }
}
export default CostEstimateBlock;
