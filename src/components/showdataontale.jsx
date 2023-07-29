import './showdataontale.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Showdataontale(props) {

    var { data } = props;

    return (
        <div>
            <div className='id'>
                {data.id}
            </div>
            <div className='name'>
                {data.name}
            </div>
            <div className='age'>
                {data.age}
                <button class="create-button" id="back" onClick={(e) => link_costestimateblock()} style={{ cursor: 'pointer' }}>Create</button>
            </div>
        </div>

    );

}
function link_costestimateblock() {
    window.location.assign("/costestimateblock")
}
export default Showdataontale;