import React from 'react';
import classes from './LeftLandingSectionUpper.module.css';
import Arrowup from '../assets/arrow-up.png';
import Arrowdown from '../assets/arrow-down.png';
import LandingSecImage from '../assets/landing-section-image.png';
// import RightLandingSection from '../RightLandingSection/RightLandingSection';
// // import classes from '../RightLandingSection/RightLandingSection.modeule.css';


const LeftLandingUpperSection = () => {
    return(
           <div>
            <div className={classes.Title}>
                <p>Stunning</p>
                <p>Workplace<div className={classes.Dot}></div></p>
              </div>
              
              <div className={classes.Paradiv}>
              <p className={classes.Para}>With Stunning, remote teams can organize projects, 
              manage shifting priorities, and get work done.</p>
              </div>
              
              <div className={classes.ButtonWrapp}>
                <div className={classes.Flex}>
                <button className={classes.OtherButton}>New Account</button>
                <img src={Arrowup} alt="Arrowup"/>  
                <img src={Arrowdown} alt="Arrowimg"/> 
                </div>     
                <div className={classes.RightSection}>
                  <img className={classes.RightImage} src={LandingSecImage} alt="Rightimg"/>
                </div>
            </div>
         </div>
    );
}

export default LeftLandingUpperSection;