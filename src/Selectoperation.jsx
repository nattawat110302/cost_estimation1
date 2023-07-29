import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Selectoperation() {

    return (
        <div class="bg">
            <div class="Header">
                <AppHeader />
            </div>
            <div className='container-blockimg'>
                    <div class="blockimg" onClick={(e) => link_addpatient()} style={{ cursor: 'pointer' }}>
                        <img className="img" src="/images/addnewp.png" alt="5 Terre" />
                        <div class="container-select-operation">
                            <p>Add new Patient</p>
                        </div>
                    </div>

                    <div class="blockimg" onClick={(e) => link_selectpatient()} style={{ cursor: 'pointer' }}>
                        <img className="img" src="/images/costestimation.png" alt="Norther Lights" />
                        <div class="container-select-operation">
                            <p>Cost Estimation</p>
                        </div>
                    </div>

            </div>
        </div>
    );
}

function link_addpatient() {
    window.location.assign("/addpatient")
}
function link_selectpatient() {
    window.location.assign("/selectpatient")
}

export default Selectoperation;