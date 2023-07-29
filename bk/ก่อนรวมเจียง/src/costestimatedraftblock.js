import './App.css';
import AppHeader from './components/AppHeader';
// import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';

function EstimationBLock() {
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
                <label class="pinfo">Natthawat Sangkong</label>
                <label class="pinfo attribute">Age :</label>
                <label class="pinfo">12</label><br/>
                <label class="pinfo attribute">ICD-9 Code :</label>
                <label class="pinfo">------</label>
                <label class="pinfo attribute">Procedure Name :</label>
                <label class="pinfo">------</label><br/>
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
            <div class="Nextbutton">
                <button class="Button" id="verify">Verify</button>
            </div>
        </div>
    );
}
function BLock() {
    const data = [
      {
        name: "MAINBOARD 1700 MSI PRO H6 DDR4",
        price: 2790
      },
      {
        name: "POWER SUPPLY AEROCOOL AE650 - 650W 80 PLUS",
        price: 1700
      },
    ];
  
    const [selectedItem, setSelectedItem] = useState(null);
  
    if (data.length === 0) {
      return <label></label>;
    } else {
      const handleItemClick = (index) => {
        setSelectedItem(index);
      };
  
      const listItems = data.map((element, index) => {
        return (
          <ul type="disc" key={index}>
            <li className="Item-li">
              <input
                type="checkbox"
                className="draftcheckbox"
                checked={selectedItem === index}
                onChange={() => handleItemClick(index)}
              />
              <br />
              {element.name}<br />
              {element.price}
            </li>
          </ul>
        );
      });
  
      return <div className="items">{listItems}</div>;
    }
  }
  
export default EstimationBLock;
