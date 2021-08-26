import React from 'react';
import logo from '../amazon-logo.png';
import classes from '../SmartWatch.module.css';

const Logo = () => {
    return(
        <header>
        <nav className={classes.logo}>
            <img src={logo} alt="amazon logo" className={classes.logoImg} />
        </nav>
        </header>
    )
}

export default Logo;