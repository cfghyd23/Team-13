import React from 'react';
import '../style/EligibilityCriteria.css';

import Navbar from './Navbar'
import Footer from './Footer';

const EligibilityCriteria = () => {
  return (
    <div>

    <div>
    <Navbar/>
    </div>
    
        <div className="eligibility-criteria">
      <h2>Eligibility Criteria for Blood Donation</h2>
      <ul>
        <li>You must be at least 18 years old and weigh at least 50 kg.</li>
        <li>You should be in good health and feeling well on the day of donation.</li>
        <li>You should not have any infectious diseases, such as HIV or hepatitis.</li>
        <li>You should not have had any high-risk behaviors, such as intravenous drug use or unprotected sex in the past year.</li>
        <li>You should not have received a blood transfusion in the past 3 months.</li>
        <li>You should not have traveled to areas with high risk of malaria in the past year.</li>
        <li>You should not have had a recent tattoo or piercing in the past 6 months.</li>
        <li>You should not have had major surgery in the past 6 months.</li>
        <li>You should not be pregnant or have given birth in the past 6 months.</li>
      </ul>
    </div>
    <div>
    <Footer/>
    </div>
    
    </div>

    
  );
};

export default EligibilityCriteria;