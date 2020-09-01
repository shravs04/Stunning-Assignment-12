import React from 'react';
import classes from './RightLandingSection.module.css';
import LandingSecImage from '../assets/landing-section-image.png';


const RightLandingSection = () => {
    return(

        <div className={classes.RightSection}>
          <img className={classes.RightImage} src={LandingSecImage} alt="Rightimg"/>
        </div>
    );

}

export default RightLandingSection;