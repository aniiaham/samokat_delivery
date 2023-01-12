import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import samokatImage from '../../assets/Samokat.jpg';
import classes from "./Header.module.css";

const Header = (props) => {
  return <React.Fragment>
    <header className={classes.header}>
        <h1>Samokat</h1>
       <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
        <img src={samokatImage} alt="Delicious food"/>
    </div>
  </React.Fragment>
};

export default Header;
