import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav>
        <ul>
            <li>
                <NavLink
                    className='navlink'
                    to="/"
                    exact="true"
                >Главная</NavLink>
            </li>
            <li>
                <NavLink
                className='navlink'
                to="/favorites"
            >Избранное</NavLink>
                </li>
            <li>
                <NavLink
                    className='navlink'
                    to="/project"
                >О проекте</NavLink>
            </li>
        </ul>
    </nav>
)