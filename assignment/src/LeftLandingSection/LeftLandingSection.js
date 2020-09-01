import React from 'react';
import classes from './LeftLandingSection.module.css';
import LeftLandingUpperSection from '../LeftLandingSectionUpper/LeftLandingSectionUpper';
import LeftLandingSectionLower from '../LeftLandingSectionLower/LeftLandingSectionLower';



const LeftLandingSection = () => {
    return(
        <div className={classes.LeftSection}>
              <LeftLandingUpperSection />             
              <LeftLandingSectionLower />
          
          </div>
    );

}

export default LeftLandingSection;