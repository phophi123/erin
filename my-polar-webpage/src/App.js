import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './About';
import Act from './act';
import Danger from './dangers';
import Gallery from './Gallery';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/About" element={<AboutPage/>}></Route>
        <Route path="/act" element={<Act/>}></Route>
        <Route path="/dangers" element ={<Danger/>}></Route>
        <Route path="/Gallery" element ={<Gallery/>}></Route>
      </Routes>
    </Router>
  );
};
 
export default App;