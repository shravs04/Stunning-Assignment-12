import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import Topbar from './Topbar/Topbar';
import LandingSection from './LandingSection/LandingSection';



function App() {
  return (
    <div className={classes.App}>
        <Topbar />       
        <LandingSection /> 
     </div> 
  );
}  

export default App;