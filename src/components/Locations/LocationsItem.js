import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Context/Context";

const LocationsItem = ({ location }) => {
    const [addFavorite, setAddFavorite] = useState(false)
    const {isAuth, setIsAuth} = useContext(AuthContext)

    useEffect( () => {
        try {
            let jsonFavorites = JSON.parse(localStorage.getItem('users')) || []
            let usersAuth = JSON.parse(localStorage.getItem('authUsers')) || []
            const trueButton = jsonFavorites[usersAuth[0].id].favoritesLocations.includes(location.id)
            setAddFavorite(trueButton)
        } catch (e) {
            console.log("Ошибка")
        }
    })

    function buttonHandler(event) {
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
                        if(users[i].favoritesLocations.includes(id)) {

                        } else {
                            console.log(users[i].favoritesLocations.push(id))
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
                    <h3>{location.name}</h3>
                    <span className="status">
                        <span className="status-icon">{location.type}</span>
                        <span className="status-icon">{location.dimension}</span>


                        </span>
                    <span className="status-icon">{location.residents.length}</span>

                </div>
            </div>
            {isAuth
                ?
                <div className="character-card__add-favorites">
                    {addFavorite
                        ? <button onClick={buttonHandler} data-id={location.id} className="character-card__add-favorites_added">В избранном</button>
                        : <button onClick={buttonHandler} data-id={location.id}>Добавить в избранное</button>
                    }

                </div>
                :
                <></>
            }
        </div>
    );
};

export default LocationsItem;