import React from "react";
import Spinner from "../UI/spinner";
import CharacterItem from "./CharacterItem";
import "./index.scss"
import SearchError from "../Filter/SearchError";

const CharacterGrid = ({ characters, isLoading, typeChange, error }) => {

    return isLoading ? (
        <>
            {!error
                ? <Spinner />
                : <SearchError/>
            }

            </>
    ) : (
        <section className={typeChange ? "char-cards char-cards__row" : "char-cards"}>
            {characters.map((character) => (
                <CharacterItem
                    key={character.id}
                    character={character}
                />
            ))}

        </section>
    );
};

export default CharacterGrid;

