import './App.css';
import AppHeader from './components/AppHeader';

function Selectoperation() {

    return (
        <div class="bg">
            <div class="Header">
                <AppHeader />
            </div>
            <div className='container-blockimg'>
                <div class="blockimg">
                    <img className="img" src="/images/addnewp.png" alt="5 Terre" />
                    <div class="container-select-operation">
                        <p>Add new Patient</p>
                    </div>
                </div>

                <div class="blockimg">
                    <img className="img" src="/images/costestimation.png" alt="Norther Lights" />
                    <div class="container-select-operation">
                        <p>Cost Estimation</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selectoperation;