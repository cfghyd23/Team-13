import React from 'react';
import { Line } from 'react-chartjs-2';
import './LandingPage.css';
import './Home.css';
import Navbar from '../Navbar/Navbar'

import AppFooter from '../AppFooter';
import Layout from '../../Layout';
import { Link } from "react-router-dom";


function LandingPage(){
  const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Indian Donors',
        data: [500, 700, 900, 1200, 1500, 1800, 2000], // Replace with your actual data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
<Layout>    
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to the Blood Donation Platform</h1>
        <p>Donate blood, save lives!</p>
        <div className='font-style'>
        An online platform for the Blood Warriors Foundation, a registered NGO dedicated to empowering the community and breaking the stigmas surrounding blood donation for Thalassemia patients. 
        </div>
        
        <Link to="/about">
        <button className="cta-button" href="/login">Donate Now</button>
      </Link>
      <Link to="/about">
        <button className="cta-button" href="/login ">Request Now</button>
      </Link>
        
        
      </header>
      <section className="features">
        <div className="feature">
          <h2>Search and Match</h2>
          <p>Find compatible blood donors in your area with ease.</p>
        </div>
        <div className="feature">
          <h2>Make a Difference</h2>
          <p>Donate blood and help those in need.</p>
        </div>
        <div className="feature">
        <img src=". /logo.png" alt="Example Image" />
          <h2>Connect with Others</h2>
          <p>Communicate with patients, blood banks, and non-profit organizations.</p>
        </div>
      </section>
      <div className="home">
      <section className="importance-section">
        <h2>The Importance of Blood Donation</h2>
        <p>
          Blood donation is a vital aspect of healthcare. It saves lives by providing essential blood
          components for transfusions and medical treatments. Donated blood can help individuals with
          various medical conditions, such as accidents, surgeries, anemia, and chronic diseases.
          By donating blood, you contribute to the well-being and recovery of countless individuals.
        </p>
        {/* <button className="donate-button">Donate Now</button> */}
      </section>

      <section className="graph-section">
      <div style={{ width: '800px', height: '400px' }} className="graph-container">
      <h2 style={{justifyContent:'flex'}}>Indian Donors Over the Years</h2>
      <Line data={data} />
    </div>
      
      </section>
    </div>
    </div>
    
    </Layout>
  );
};

export default LandingPage;