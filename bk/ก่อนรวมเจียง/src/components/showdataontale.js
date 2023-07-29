import './showdataontale.css';

function Showdataontale(props) {

    var { data } = props;

    return (
        <div className='b'>
            <div className="text">

                <div className="texttable">
                    {data.id}
                </div>
            </div>
            <div className="text">

                <div className="texttable">
                    {data.name}
                </div>
                
            </div><div className="text">

                <div className="texttable">
                    {data.age}
                </div>
                <div className="texttable">
                </div>

            </div>
            <br/>
        </div>

    );

}

export default Showdataontale;