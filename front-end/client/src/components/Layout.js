import React from 'react';
import '../style/AboutUs.css';
import Navbar from './Navbar'
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Layout/>
      <Footer/>
    </div>
  );
};

export default Layout;
