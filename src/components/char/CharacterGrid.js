import React from "react";
import Spinner from "./spinner";
import CharacterItem from "./CharacterItem";
import "./index.scss"

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="char-cards">
            {characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            ))}
        </section>
    );
};

export default CharacterGrid;

