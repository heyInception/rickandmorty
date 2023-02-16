import React from "react";
import Spinner from "../UI/spinner";
import LocationsItem from "./LocationsItem";
import SearchError from "../Filter/SearchError";

const LocatoinGrid = ({ locations, isLoading, error  }) => {
    return isLoading ? (
        <>
            {!error
                ? <Spinner />
                : <SearchError/>
            }

        </>
    ) : (
        <section className="char-cards">
            {locations.map((location) => (
                <LocationsItem key={location.id} location={location} />
            ))}
        </section>
    );
};

export default LocatoinGrid;

