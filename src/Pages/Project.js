import React from "react";
import {useNavigate} from 'react-router-dom';


export const Project = () => {
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
                <h1>О проекте</h1>
            </div>
            <div className="content-wrap">
                <div className="content-wrap__text">
                    <p>Данный проект создан по мотивам приключений Рика и Морти. Здесь вы можете поближе познакомиться со всеми персонажами, эпизодами и локациями данного мультсериала.</p>
                    <p>Проект является тестовым заданием для входящих кандидатов пула Frontend. В зависимости от грейда кандидата необходимо выполнить соответствующий список заданий. Желаем удачи!</p>
                </div>
            </div>
        </div>
    )
}