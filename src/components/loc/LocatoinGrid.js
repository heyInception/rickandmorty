import React from "react";
import Spinner from "./spinner";
import LocationsItem from "./LocationsItem";
import "./index.scss"

const LocatoinGrid = ({ locations, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="char-cards">
            {locations.map((location) => (
                <LocationsItem key={location.id} location={location} />
            ))}
        </section>
    );
};

export default LocatoinGrid;

