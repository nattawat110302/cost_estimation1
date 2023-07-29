import './App.css';
import AppHeader from './components/AppHeader';

function Selectoperation() {

    return (
        <div class="bg">
            <div class="Header">
                <AppHeader />
            </div>

                <div class="blockimg">
                    <img className="img" src="/images/addnewp.png" alt="5 Terre" />
                        <div class="container">
                            <p>Add new Patient</p>
                        </div>
                </div>

                <div class="blockimg">
                    <img className="img" src="/images/costestimation.png" alt="Norther Lights" />
                        <div class="container">
                            <p>Cost Estimation</p>
                        </div>
            </div>
        </div>
    );
}

export default Selectoperation;