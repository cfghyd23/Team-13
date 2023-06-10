import React from 'react';
import '../style/AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="text-container">
          <h2>Who are we?</h2>
          <p>
            We are Blood Warriors Foundation, a registered NGO with a visionary mission to empower the community and break
            the stigmas surrounding blood donation for Thalassemia patients. We aspire to be the backbone of support for
            those affected by this life-altering blood disorder. By fostering policy-level change and promoting prenatal
            diagnosis, we aim to identify carriers of Thalassemia and build a future where this debilitating disorder is a
            thing of the past.
          </p>
        </div>
        {/* <div className="image-container">
          <img src={aboutUsImage} alt="About Us" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
