import React from "react";
import classes from "./Navbar.module.css";

import logo from "./logo/logo.png";
const MyNavbar = () => {
    return (
        <div>
            <div className={classes.myTopbar}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={classes.text}>
                    <h3>Barishal University Admission System</h3>
                    <h4>Complain Box</h4>
                </div>
                <div className={classes.logo2}>

                </div>
            </div>

    
        </div>
    );
};

export default MyNavbar;
