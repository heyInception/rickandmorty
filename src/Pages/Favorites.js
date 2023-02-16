import React from "react";
import {useNavigate} from 'react-router-dom';
import FavoritesList from "../components/Favorites/FavoritesList";

export const Favorites = () => {
    const navigate = useNavigate();
    return (
    <div className="wrap">
            <div className="page-main">
                <button onClick={() => navigate(-1)} className="back-navigate btn-reset">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.67 0L19.5 2.829L10.161 12.004L19.5 21.171L16.67 24L4.5 12.004L16.67 0Z" fill="black"/>
                    </svg>
                    <span>Назад</span>
                </button>
                <h1>Избранное</h1>
            </div>
        <FavoritesList></FavoritesList>

        </div>

    )
}