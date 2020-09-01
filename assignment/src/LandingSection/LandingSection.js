import React from 'react';
import classes from './LandingSection.module.css';
import LeftLandingSection from '../LeftLandingSection/LeftLandingSection';
import RightLandingSection from '../RightLandingSection/RightLandingSection';


const LandingSection = () => {
    return(
        <div className={classes.LandingSection}>
             <LeftLandingSection />
             <RightLandingSection />
        </div> 
    );

}

export default LandingSection;