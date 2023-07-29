import './App.css';
import AppHeader from './components/AppHeader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CostEstimateDraftBlock() {
  const [value, setValue] = useState("Select option...");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [actualPrice, setActualPrice] = useState("");

  const handleVerify = () => {
    setIsPopupOpen(true);
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  const handleConfirm = () => {
    setIsPopupOpen(false);
    // Add your verification logic here using the 'actualPrice' state value
    console.log(`Verification confirmed with actual price: ${actualPrice} Baht`);
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
        <label class="pinfo">Natthawat Sangkong</label>
        <label class="pinfo attribute">Age :</label>
        <label class="pinfo">12</label><br />
        <label class="pinfo attribute">ICD-9 Code :</label>
        <label class="pinfo">------</label>
        <label class="pinfo attribute">Procedure Name :</label>
        <label class="pinfo">------</label><br />
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
      <div className="Nextbutton">
        <a>Actual Price</a>
        <input
          type="number"
          className="textfield"
          value={actualPrice}
          onChange={(e) => setActualPrice(e.target.value)}
        />
        <button className="Button" id="verify" onClick={handleVerify}>
          Verify
        </button>
      </div>

      {/* Custom Popup */}
      {isPopupOpen && (
        <div className="custom-popup">
          <h2>Confirmation</h2>
          <p>
            Are you sure to Verify and compare selected cost estimation sheet to actual price{' '}
            {actualPrice} Baht?
          </p>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
        </div>
      )}
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

  const [selectedItem, setSelectedItem] = React.useState(null);

  if (data.length === 0) {
    return <label></label>;
  } else {
    const handleItemClick = (index, e) => {
      if (e.target.tagName === 'INPUT') {
        // If the click is on the checkbox, only handle checkbox behavior
        setSelectedItem(index);
      } else {
        // If the click is outside the checkbox, navigate the link
        // Here, you can replace "/selectorcreatetemplate.js" with your desired link URL
        window.location.href = "/selectorcreatetemplate";
      }
    };

    const handleCheckboxChange = (index) => {
      setSelectedItem(index);
    };

    const listItems = data.map((element, index) => {
      return (
        <ul type="disc" key={index}>
          {/* Wrap the content inside a div with onClick */}
          <div onClick={(e) => handleItemClick(index, e)} style={{ cursor: 'pointer' }}>
            <li className="Item-li">
              <input
                type="checkbox"
                className="draftcheckbox"
                checked={selectedItem === index}
                onChange={() => handleCheckboxChange(index)}
              />
              <br />
              {element.name}
              <br />
              {element.price}
            </li>
          </div>
        </ul>
      );
    });

    return <div className="items">{listItems}</div>;
  }
}


export default CostEstimateDraftBlock;
