import './App.css';
import AppHeader from './components/AppHeader';
import SearchableDropdown from './components/SearchableDropdown';
import { searchdata } from "./data/searchdata.js";
import React, { useState } from 'react';


function Selectpaymenttypehave() {
    const [value, setValue] = useState("");

    const handleVerify = () => {

        alert("Link to input insurance");
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
                    <input type="radio" id="do" name="medclerance" onClick={handleVerify}></input>
                    <label htmlFor="do" className="marg-left10">Have Insurance</label>
                    <input type="radio" id="donotdo" className="marg-left20" name="medclerance" ></input>
                    <label htmlFor="donotdo" className="marg-left10">Don’t have Insurance</label>

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

                    <h3>Insurance Coverage Detail</h3>
                    <div className='Insurance'>
                        <div className="subhead-text-column2">
                            <label>ค่าห้อง, ค่าอาหาร และ ค่าบริการพยาบาล</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        <div className="subhead-text-column2">
                            <label>ค่าห้องไอซียู</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        <div className="subhead-text-column2">
                            <label>ค่าใช้จ่ายทั่วไปในโรงพยาบาล</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        <div className="subhead-text-column2">
                            <label>ค่าแพทย์เยี่ยมไข้</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        <div className="subhead-text-column2">
                            <label>ค่าห้องผ่าตัด และ อุปกรณ์ห้องผ่าตัด</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        
                    </div>
                    <div>
                        <div className="subhead-text-column2">
                            <label>ค่าธรรมเนียมผ่าตัด ตามตารางผ่าต้ด</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        <div className="subhead-text-column2">
                            <label>ค่าธรรมเนียมวิสัญญีแพทยตามตารางผ่าต้ด</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        <div className="subhead-text-column2">
                            <label>ส่วนเกินสิทธิค่าใช้จ่ายในโรงพยาบาล</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
                        <div className="subhead-text-column2">
                            <label>ส่วนเกินสืทธิค่าผ่าตัด และ ค่าหัตถการตามตารางผ่าตัด</label><br />
                            <input className="textfield-basic2" type="number" ></input>
                            <label>บาท</label><br />
                        </div>
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
                    <button className="Button Backbutton">Back</button>
                    <button className="Button Nextbutton">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Selectpaymenttypehave;
