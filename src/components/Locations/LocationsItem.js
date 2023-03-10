import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Context/Context";
import classes from './locations.module.scss';


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
                $el.classList.add(`${classes.add_favorite_button_added}`)
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
        <div className={classes.locations_card}>

            <div className={classes.locations_content}>
                <div className={classes.locations_title}>
                    <h3>{location.name}</h3>
                </div>
                <div className={classes.locations_row}>
                <div className={classes.locations_column}>
                    <div className={classes.locations_wrap}>
                        <div className={classes.locations_type}>Тип:</div>
                        <div className={classes.locations_name}>{location.type}</div>
                    </div>
                    <div className={classes.locations_wrap}>
                        <div className={classes.locations_type}>Измерение:</div>
                        <div className={classes.locations_name}>{location.dimension}</div>
                    </div>
                </div>
                <div className={classes.locations_column}>
                    <div className={classes.locations_wrap}>
                        <div className={classes.locations_type}>Количество персонажей, которые в последний раз были замечены здесь:</div>
                        <div className={[classes.locations_name,classes.locations_name_small].join(' ')}>{location.residents.length}</div>
                    </div>
                </div>
                </div>
            </div>
            {isAuth
                ?
                <div className={classes.add_favorite}>
                    {addFavorite
                        ? <button onClick={buttonHandler} data-id={location.id} className={classes.add_favorite_button}>В избранном</button>
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