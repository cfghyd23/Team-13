import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Home.css';


function Home(){
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
  );
};

export default Home;