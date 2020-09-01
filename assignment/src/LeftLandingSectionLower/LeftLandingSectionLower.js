import React from 'react';
import classes from './LeftLandingSectionLower.module.css';
import Userpink from '../assets/user-pink.png';
import Userblue from '../assets/user-blue.png';
import Userorange from '../assets/user-orange.png';
import Userred from '../assets/user-red.png';
import GrayTick from '../assets/tick-gray.png';
import Bluetick from '../assets/tick-blue.png';


const LeftLandingSectionLower = () => {
    return(
        <div className={classes.BottomSectionWrapper}>
        
        <div className={classes.SectionList1}>
            <img className={classes.Tick1} src={GrayTick} alt="Tick"/>
            <p className={classes.Sections1}>Dmm design</p>
            <img className={classes.Userpink1} src={Userpink} alt="Userpink"/>
            <p className={classes.Date1}>20 Dec</p>
            <div className={classes.LastItempink}></div>
        </div>
        <div className={[classes.SectionList2, classes.Dropshadow].join(" ")}>
            <img className={classes.Tick2} src={Bluetick} alt="Tick"/>
            <p className={classes.Sections2}>Blurr animation</p>
            <img className={classes.Userorange2} src={Userorange} alt="Userpink"/>
            <p className={classes.Date2}>22 Dec</p>
            <div className={classes.LastItemred}></div>
        </div>
        <div className={classes.SectionList3}>
            <img className={classes.Tick3} src={GrayTick} alt="Tick"/>
            <p className={classes.Sections3}>Illustration</p>
            <img className={classes.Userblue3} src={Userblue} alt="Userpink"/>
            <p className={classes.Date3}>26 Dec</p>
            <div className={classes.LastItemgreen}></div>
        </div>
        <div className={classes.SectionList4}>
            <img className={classes.Tick4} src={GrayTick} alt="Tick"/>
            <p className={classes.Sections4}>Refunds</p>
            <img className={classes.Userred4} src={Userred} alt="Userpink"/>
            <p className={classes.Date4}>28 Dec</p>
            <div className={classes.LastItemorange}></div>
        </div>
      
      </div> 
    );

}

export default LeftLandingSectionLower;