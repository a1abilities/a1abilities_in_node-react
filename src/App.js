import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import OurGoals from './components/OurGoals';
import Whyus1 from './components/why';
import OurPartners from './components/OurPartners';
import Map from './components/map';
import Footer from './components/footer';
import Thank from './components/thank';

import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
     <Navbar />
    <Home />
    <Services />
    <Blog/> 
    <About/>
    <OurGoals/>
    <Portfolio/>
    <Whyus1/>
    <OurPartners/>
    <Contact/>
    <Map/>
     <Footer/>   
            </Router>  
     
    </div>
  );
}

export default App;
