import AppHeader from './components/AppHeader';
import './App.css';
import Select from "react-dropdown-select";

function AddPatient() {
    const options = [
        {
            id: 1,
            name: "Leanne Graham"
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
            <div className="formaddpatient" >
                <label>First Name</label><br />
                <div className="form-controlp">
                    <input type="text" autoFocus="true"></input>
                </div>
                <label>Last Name</label>
                <div className="form-controlp">
                    <input type="text" ></input>
                </div>
                <label>Date of birth</label>
                <div className="form-controlp">
                    <input type="date" ></input>
                </div>
                <label>Underlying Disease</label>
                <div className="form-controlp">
                    <Select options={options} labelField="name" valueField="id" />
                    {/* <Select options={options} labelField="name" valueField="id" onChange={(values) => this.setValues(values)} /> */}
                </div>
                <div class="Cancelbutton">
                    <button class="Button" id="cancel">Cancel</button>
                </div>
                <div class="Submitbutton">
                    <button class="Button" id="submit">Submit</button>
                </div>
                
            </div>
        </div>
    );
};

export default AddPatient;