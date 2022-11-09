import React from "react";
import CharactersImg from '../assets/img/characters.jpg'
import LocationsImg from '../assets/img/locations.jpg'
import EpisodesImg from '../assets/img/episodes.jpg'
import '../assets/scss/components/home.scss'
import {NavLink} from "react-router-dom";

export const Home = () => {
    return (
        <section className="main">
            <div className="main__row">
                <NavLink to="/characters" className="main__column main__column_episodes">
                    <div className="main__img">
                        <img src={CharactersImg} alt="Characters"/>
                    </div>
                    <div className="main__title">Персонажи</div>
                    <div className="main__content">Зайди и познакомься со всеми персонажами вселенной</div>
                </NavLink>
                <NavLink to="/locations" className="main__column main__column_locations">
                    <div className="main__img">
                        <img src={LocationsImg} alt="Locations"/>
                    </div>
                    <div className="main__title">Локации</div>
                    <div className="main__content">Исследуй все локации. Давай же, не будь занудой!</div>
                </NavLink>
                <NavLink to="/episodes" className="main__column main__column_characters">
                    <div className="main__img">
                        <img src={EpisodesImg} alt="Episodes"/>
                    </div>
                    <div className="main__title">Эпизоды</div>
                    <div className="main__content">Узнай чуть больше о карте приключений Рика и Морти</div>
                </NavLink>
            </div>
        </section>

    )
}