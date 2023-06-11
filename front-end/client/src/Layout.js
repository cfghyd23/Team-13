import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AppFooter from './components/AppFooter';


function Layout({children}) {
  return (
    <div className="App">
      <Navbar />
      <main >
        {children}

      </main>
      <AppFooter />
    </div>
  );
}

export default Layout;