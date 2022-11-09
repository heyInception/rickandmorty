import React from "react";
import {Navbar} from "./Navbar";
import '../assets/scss/components/header.scss'
import Logo from '../assets/img/logo.svg'
import {Account} from "./Account";

export const Header = () => (
    <header className="header">
        <div className="container">
            <div className="header__row">
                <div className="header__column">
                    <div className="header__logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="header__column">
                    <Navbar/>
                    <Account/>
                </div>
            </div>
        </div>
    </header>

)