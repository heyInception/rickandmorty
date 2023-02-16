import React from "react";
import Spinner from "../UI/spinner";
import EpisodesItem from "./EpisodesItem";
import SearchError from "../Filter/SearchError";

const EpisodesGrid = ({ episodes, isLoading, error }) => {
    return isLoading ? (
        <>
            {!error
                ? <Spinner />
                : <SearchError/>
            }

        </>
    ) : (
        <section className="char-cards char-cards__row">
            {episodes.map((episode) => (
                <EpisodesItem key={episode.id} episode={episode} />
            ))}
        </section>
    );
};

export default EpisodesGrid;

