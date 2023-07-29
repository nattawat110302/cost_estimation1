import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// J
import CostEstimateDraftBlock from './costestimatedraftblock';
import SelectorCreateTemplate from './SelectorCreateTemplate';
import CostEstimateBlock from './costestimateblock';
import CreateTemplate from './CreateTemplate';
import CostEstimationDetail from './CostEstimationDetail';
// N
import Login from './Login';
import SelectPatient from './Selectpatient';
import AddPatient from './AddPatient';
import Adduser from './Adduser';
import Selectoperation from './Selectoperation';

function App() {
  return (
    <Router>
      <div>
        {/* <h1>App Index</h1>
        <div>
          <Link to="/">Go to Cost Estimate Draft Block</Link>
        </div>
        <div>
          <Link to="/selectorcreatetemplate">Go to Selector Create Template</Link>
        </div>
        <div>
          <Link to="/costestimateblock">Go to Cost Estimate Block</Link>
        </div> */}

        <Routes>
          {/* N */}
          <Route path="/login" element={<Login />} />
          <Route path="/SelectPatient" element={<SelectPatient />} />
          <Route path="/AddPatient" element={<AddPatient />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/Selectoperation" element={<Selectoperation />} />
          <Route path="/" element={<Login />} />
          {/* J */}
          <Route path="/CostEstimateDraftBlock" element={<CostEstimateDraftBlock />} />
          <Route path="/selectorcreatetemplate" element={<SelectorCreateTemplate />} /> 
          <Route path="/costestimateblock" element={<CostEstimateBlock />} />
          <Route path="/CreateTemplate" element={<CreateTemplate />} />
          <Route path="/CostEstimationDetail" element={<CostEstimationDetail />} />
          {/* <Route path="/" element={<CostEstimationDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
