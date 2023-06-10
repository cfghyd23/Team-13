
import React from 'react'
import Navbar from "./components/Navbar";
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import EligibilityCriteria from './components/EligibilityCriteria';



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Navbar} />
    </Switch>
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
    <Switch>
      <Route exact path="/" component={AboutUs} />
    </Switch>
    <Switch>
      <Route exact path="/" component={Footer} />
    </Switch>
    <Switch>
      <Route exact path="/Eligibility" component={EligibilityCriteria} />
    </Switch>
    </BrowserRouter>
    
   
  );
}

export default App;