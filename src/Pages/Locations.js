import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import LocatoinGrid from "../components/Locations/LocatoinGrid";
import Pagination from "../components/Pagination/Pagination";
import FilterInput from "../components/Filter/FilterInput";

export function Locations() {
    const [locations, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterName, setFilterName] = useState("")
    const [filterSpecies, setFilterSpecies] = useState("")
    const [filterStatus, setFilterStatus] = useState(null)
    const [filterTypes, setFilterTypes] = useState(null)
    const [error, setError] = useState(null);

    const [typeChange, setTypeChange] = useState(false)
    const navigate = useNavigate();

    function handleStatusFilterChange(statusFilterValue) {
        setFilterStatus(statusFilterValue);

    }

    function handleNameFilterChange(nameFilterValue) {
        setFilterName(nameFilterValue);
    }

    function handleSpeciesFilterChange(speciesFilterValue) {
        setFilterSpecies(speciesFilterValue);
    }



    return (
        <div className="wrap">
            <div className="page-main">
                <button onClick={() => navigate(-1)} className="back-navigate btn-reset">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.67 0L19.5 2.829L10.161 12.004L19.5 21.171L16.67 24L4.5 12.004L16.67 0Z" fill="black"/>
                    </svg>
                    <span>Назад</span>
                </button>
                <h1>Локации</h1>
            </div>
            <FilterInput
                filterName={filterName}
                filterSpecies={filterSpecies}
                filterStatus={filterStatus}
                onStatusFilterChange={handleStatusFilterChange}
                onNameFilterChange={handleNameFilterChange}
                onSpeciesFilterChange={handleSpeciesFilterChange}
                onTypeFilterChange={setTypeChange}
                typeChange={typeChange}
                isPage="location"
            />
            <LocatoinGrid isLoading={isLoading} locations={locations} error={error}/>
            <Pagination
                filterName={filterName}
                filterSpecies={filterSpecies}
                filterStatus={filterStatus}
                isPage="location"
                setCharacters={setCharacters}
                setIsLoading={setIsLoading}
                setError={setError}
                error={error}
            />
        </div>
    );
}