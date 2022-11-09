import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import LocatoinGrid from "../components/loc/LocatoinGrid";
import Pagination from "../components/pagination/Pagination";

export function Locations() {
    const [locations, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="wrap">
            <div className="page-main">
                <button onClick={() => navigate(-1)} className="back-navigate btn-reset">Назад</button>
                <h1>Локации</h1>
            </div>
            <LocatoinGrid isLoading={isLoading} locations={locations} />
            <Pagination isPage="location" setCharacters={setCharacters} setIsLoading={setIsLoading} />
        </div>
    );
}