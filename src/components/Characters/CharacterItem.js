import React, {useEffect, useState} from "react";

const CharacterItem = ({ character }) => {
    const [addFavorite, setAddFavorite] = useState(false)

    useEffect( () => {
        try {
            let jsonFavorites = JSON.parse(localStorage.getItem('users')) || []
            let usersAuth = JSON.parse(localStorage.getItem('authUsers')) || []
            const trueButton = jsonFavorites[usersAuth[0].id].favoritesCharacters.includes(character.id)
            setAddFavorite(trueButton)
        } catch (e) {
            console.log("Ошибка")
        }
    })

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

    if (character.status === "Alive") {
        className = classAlive;
    } else if (character.status === "Dead") {
        className = classDead;
    } else if (character.status === "unknown") {
        className = classUnknown;
    }

    const buttonHandlers = event => {
        const $el = event.target
        const id = Number($el.dataset.id)


        if (id) {
            let users = JSON.parse(localStorage.getItem('users')) || []
            let usersAuth = JSON.parse(localStorage.getItem('authUsers')) || []


                for(let i = 0; users.length > i; i++) {
                    $el.classList.add('character-card__add-favorites_added')
                    $el.innerHTML = 'В избранном'
                    for(let i = 0; users.length > i; i++) {
                        if (users[i].email === usersAuth[0].login) {
                            if(users[i].favoritesCharacters.includes(id)) {

                            } else {
                                console.log(users[i].favoritesCharacters.push(id))
                            }

                    }
                }
            }

            localStorage.setItem('users', JSON.stringify(users))
        }
    };

    const filterEpisodes = () => {
        if (character.episode.length === 0) {
            return 'unknown'
        }
        if (
            character.episode[0].slice(40) ===
            character.episode[character.episode.length - 1].slice(40)
        ) {
            return character.episode[0].slice(40)
        } else {
            const createLog =
                character.episode[0].slice(40) +
                ' - ' +
                character.episode[character.episode.length - 1].slice(40)
            return createLog
        }
    };
    const episodesRange = filterEpisodes()

    console.log(addFavorite)

    return (
        <div className="character-card">
            <div className="character-img">
                <img src={character.image} alt="" />
            </div>

            <div className="character-card__content">
                <div className="character-card__title">
                    <h3>{character.name}</h3>
                    <span className="status">
                        <span className="status-icon" style={className}></span>
                        {character.status}
                        </span>
                </div>
                <div className="character-card__wrapper">
                    <div className="character-card__list">
                        <ul>
                            <li>Раса:</li>
                            <li>{character.species}</li>
                        </ul>
                        <ul>
                            <li>Место происхождения:</li>
                            <li>{character.origin.name}</li>
                        </ul>
                        <ul>
                            <li>Последняя локация:</li>
                            <li>{character.location.name}</li>
                        </ul>
                    </div>
                    <div className="character-card__list character-card__list_hidden">
                        <ul>
                            <li>Пол:</li>
                            <li>{character.gender}</li>
                        </ul>
                        <ul>
                            <li>Эпизоды:</li>
                            <li>{episodesRange}</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="character-card__add-favorites">
                {addFavorite
                    ? <button onClick={buttonHandlers} data-id={character.id} className="character-card__add-favorites_added">В избранном</button>
                    : <button onClick={buttonHandlers} data-id={character.id}>Добавить в избранное</button>
                }

            </div>
        </div>

    );
};

export default CharacterItem;