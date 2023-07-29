import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import SearchableDropdown from './components/SearchableDropdown';
import datas from './data/data';
import Showdataontale from './components/showdataontale';



function SelectPatient() {
    const [value, setValue] = useState("");
    const dataElements = datas.map((data, index) => {
        return <Showdataontale key={index} data={data} />;
    })

    return (

        <div className="bg">
            <style>{'body { background-color: #C7DAEF; }'}</style>
            <div className="Header">
                <AppHeader />
            </div>

            <div className="line-select-patient">
                <label className="spatienthead">Patient Name</label>
                <div className="Search-select-patient">
                    <SearchableDropdown
                        options={datas}
                        label="name"
                        id="id"
                        selectedVal={value}
                        handleChange={(val) => setValue(val)
                        }

                    />
                </div>
            </div>


            <div className="table">
                <div className="text">
                    <h4>Patient ID</h4>
                </div>
                <div className="textName">
                    <h4>Patient Name</h4>
                </div>
                <div className="textAge">
                    <h4>Patient Age</h4><br />
                </div>
                <div className="Block">
                    {dataElements}
                </div>
            </div>
            <div class="Backbutton">
                <button class="Button" id="back">Back</button>
            </div>
        </div>
    );
}




export default SelectPatient;
