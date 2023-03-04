import React from "react";
import App from "./App";
import logo from '../images/logo.svg';


function Header() {
    return (
        <header className="header">
        <img src={logo} alt="лого" className="header__logo"/>
      </header>
    )
}

export default Header;