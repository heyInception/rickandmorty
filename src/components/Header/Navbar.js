import React, {useContext} from "react";
import {NavLink} from 'react-router-dom'
import {AuthContext} from "../../Context/Context";

export const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        isAuth
            ?
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
            :
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
                            to="/project"
                        >О проекте</NavLink>
                    </li>
                </ul>
            </nav>

    )
}