import React from 'react';

const CharctersCard = ({characters,favoritesResult,setFavorite,favorite}) => {
    function buttonRemove (event) {
        const $el = event.target
        const id = Number($el.dataset.id)

        if (id) {
            let users = JSON.parse(localStorage.getItem('users')) || []
            let usersAuth = JSON.parse(localStorage.getItem('authUsers')) || []
            if (favoritesResult.includes(id)) {
                for(let i = 0; users.length > i; i++) {
                    if (users[i].email === usersAuth[0].login) {
                        users[i].favoritesCharacters = users[i].favoritesCharacters.filter(fId => fId !== id)
                        if (!Array.isArray(favorite)) {
                            setFavorite([])
                        } else {
                            for( let j = 0 ; j < favorite.length; j++) {
                                if (favorite[j].id === id) {
                                    favorite.splice(j, 1)
                                    if ([...favorite].length === 1 ) {
                                        setFavorite([...favorite][0])
                                    } else {
                                        setFavorite([...favorite])
                                    }
                                }
                            }}
                    }
                }
            }
            localStorage.setItem('users', JSON.stringify(users))
        }
    }
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

    if (characters.status === "Alive") {
        className = classAlive;
    } else if (characters.status === "Dead") {
        className = classDead;
    } else if (characters.status === "unknown") {
        className = classUnknown;
    }



    return (
        <div className="character-card">
            <div className="character-img">
                <img src={characters.image} alt="" />
            </div>
            <div className="character-card__content">
                <div className="character-card__title">
                    <h3>{characters.name}</h3>
                    <span className="status">
                        <span className="status-icon"  style={className}></span>
                        {characters.status}
                        </span>
                </div>
                <div className="character-card__list">
                    <ul>
                        <li>????????:</li>
                        <li>{characters.species}</li>
                    </ul>
                    <ul>
                        <li>?????????? ??????????????????????????:</li>
                        <li>{characters.origin.name}</li>
                    </ul>
                    <ul>
                        <li>?????????????????? ??????????????:</li>
                        <li>{characters.location.name}</li>
                    </ul>
                </div>
            </div>
            <div className="character-card__add-favorites">
                <button onClick={buttonRemove} data-id={characters.id} className="character-card__add-favorites_remove"></button>
            </div>
        </div>
    );
};

export default CharctersCard;