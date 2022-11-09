import React from "react";

const LocationsItem = ({ location }) => {
    const classAlive = {
        background: "#00CA51",
    };

    const classDead = {
        background: "#DF0000",
    };

    const classUnknown = {
        background: "#FFC803",
    };

    let className = null;

    if (location.status === "Alive") {
        className = classAlive;
    } else if (location.status === "Dead") {
        className = classDead;
    } else if (location.status === "unknown") {
        className = classUnknown;
    }

    return (
        <div className="character-card">

            <div className="character-card__content">
                <div className="character-card__title">
                    <h3>{location.name}</h3>
                    <span className="status">
                        <span className="status-icon" style={className}></span>
                        </span>
                </div>
            </div>
        </div>
    );
};

export default LocationsItem;