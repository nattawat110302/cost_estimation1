import './showdataontale.css';

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
            </div>
        </div>

    );

}

export default Showdataontale;