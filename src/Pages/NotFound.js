import React from 'react';
import {NavLink} from "react-router-dom";
import imgNotFound from "../assets/img/404.png"

const NotFound = () => {
    return (
        <div className="notfound">
            <img src={imgNotFound} alt="Усп. Кажется вы заблудились. Только без паники! "/>
            <h1>Усп. Кажется вы заблудились. Только без паники!</h1>
            <p>Страница, которую вы ищите не существует, либо была удалена</p>
            <NavLink to="/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13V23H15V17H9V23H3V13H0L12 1L24 13H21ZM20 7.093V2H17V4.093L20 7.093Z" fill="white"/>
                </svg>
                <span>Домой</span>
            </NavLink>
        </div>
    );
};

export default NotFound;