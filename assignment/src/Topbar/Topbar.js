import React from 'react';
import classes from './Topbar.module.css';
import Stunninglogo from '../assets/stunning-logo.png';

const Topbar = () => {
    return(
        <header className={classes.Topbar}>
          <img className={classes.Logo} src={Stunninglogo} alt="Logo"/>
          <div className={classes.MenuItems}>
             <a>Home</a>
             <a>About</a>
             <a>Blog</a>
             <a>Jobs</a>
          </div>
          <button className={classes.button}>Your account</button>
          <span className={classes.HamburgerIcon}><i class="fas fa-bars"></i></span>
          
      </header>
    );
}

export default Topbar;