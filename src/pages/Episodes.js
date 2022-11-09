import React, {Fragment} from "react";
import {useNavigate} from 'react-router-dom';

export const Episodes = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="page-main">
                <button onClick={() => navigate(-1)} className="back-navigate btn-reset">Назад</button>
                <h1>Эпизоды</h1>
            </div>
        </Fragment>
    )
}