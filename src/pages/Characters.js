import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import Pagination from "../components/pagination/Pagination"
import CharacterGrid from "../components/char/CharacterGrid";



export function Characters() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="wrap">
            <div className="page-main">
                <button onClick={() => navigate(-1)} className="back-navigate btn-reset">Назад</button>
                <h1>Персонажи</h1>
            </div>
            <CharacterGrid isLoading={isLoading} characters={characters} />
            <Pagination isPage="character" setCharacters={setCharacters} setIsLoading={setIsLoading} />
        </div>
    );
}
