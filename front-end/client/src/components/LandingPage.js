import React from 'react';
import './LandingPage.css';
import { Bar } from 'react-chartjs-2';
import './Home.css';
import Chart from 'chart.js/auto';
function LandingPage(){
  const bloodDonationData = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Blood Donations',
        data: [25000, 35000, 40000, 38000, 42000],
        
      },
    ],
  };
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to the Blood Donation Platform</h1>
        <p>Donate blood, save lives!</p>
        <button className="cta-button">Get Started</button>
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
        <button className="donate-button">Donate Now</button>
      </section>

      <section className="graph-section">
        <h2>Blood Donation Statistics in India</h2>
        <div className="chart-container">
          <Bar data={bloodDonationData} />
        </div>
      </section>
    </div>
      <footer className="footer">
        <p>&copy; 2023 Blood Donation Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;