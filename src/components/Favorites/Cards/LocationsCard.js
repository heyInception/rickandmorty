import React from 'react';

const LocationsCard = ({locations,favoritesResult,setFavorite,favorite}) => {
    function buttonRemove (event) {
        const $el = event.target
        const id = Number($el.dataset.id)

        if (id) {
            let users = JSON.parse(localStorage.getItem('users')) || []
            let usersAuth = JSON.parse(localStorage.getItem('authUsers')) || []
            if (favoritesResult.includes(id)) {
                for(let i = 0; users.length > i; i++) {
                    if (favoritesResult.includes(id)) {
                        for(let i = 0; users.length > i; i++) {
                            if (users[i].email === usersAuth[0].login) {
                                users[i].favoritesLocations = users[i].favoritesLocations.filter(fId => fId !== id)
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
                }

            }

            localStorage.setItem('users', JSON.stringify(users))

        }
    }
    return (
        <div className="character-card">
            <div className="character-card__content">
                <div className="character-card__title">
                    <h3>{locations.name}</h3>
                    <span className="status">
                        <span className="status-icon">{locations.type}</span>
                        <span className="status-icon">{locations.dimension}</span>
                        </span>
                    <span className="status-icon">{locations.residents.length}</span>
                </div>
            </div>
            <div className="character-card__add-favorites">
                <button onClick={buttonRemove} data-id={locations.id} className="character-card__add-favorites_remove"></button>
            </div>
        </div>
    );

};

export default LocationsCard;