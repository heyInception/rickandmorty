import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "../UI/spinner";
import CharctersCard from "./Cards/CharctersCard";
import LocationsCard from "./Cards/LocationsCard";
import EpisodesCard from "./Cards/EpisodesCard";
import classes from './favorites.module.scss'


const FavoritesList = () => {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const [favoriteLocations, setFavoriteLocations] = useState([]);
    const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
    const [isCards, setIsCards] = useState(1)
    const [isSort, setIsSort] = useState(false)
    const [isLoading, setIsLoading] = useState(true);


    const favoritesJson = JSON.parse(localStorage.getItem('users') || [])
    let usersAuth = JSON.parse(localStorage.getItem('authUsers')) || []
    const resultFavoritesCharacters = favoritesJson[usersAuth[0].id].favoritesCharacters,
        resultFavoritesLocations = favoritesJson[usersAuth[0].id].favoritesLocations,
        resultFavoritesEpisodes = favoritesJson[usersAuth[0].id].favoritesEpisodes,
        pageCharacters = 'character',
        pageLocations = 'location',
        pageEpisodes = 'episode',
        fetchApi = async (page, resultCard) => {
                setIsLoading(true)
                let result;
                let baseUrl = `https://rickandmortyapi.com/api/${page}/${resultCard}`
                result = await axios.get(baseUrl);
                if(page === 'character') {
                    console.log(result.data)
                    setFavoriteCharacters(result.data)
                } else if (page === 'location') {
                    setFavoriteLocations(result.data)
                } else if (page === 'episode') {
                    setFavoriteEpisodes(result.data)
                }
                setIsLoading(false)
                console.log(baseUrl)
            setIsSort(false)
        };

    useEffect(() => {
        console.log(isSort)
        if (isSort === false && isCards === 1 && resultFavoritesCharacters.length > 0) {
            fetchApi(pageCharacters,resultFavoritesCharacters)
        } else if (isCards === 0 && resultFavoritesLocations.length > 0) {
            fetchApi(pageLocations, resultFavoritesLocations)
        } else if (isCards === 2 && resultFavoritesEpisodes.length > 0) {
            fetchApi(pageEpisodes,resultFavoritesEpisodes)
        }
        if (resultFavoritesCharacters.length === 0) {
            setIsLoading(false)
        }
        if(isSort === true) {
            const sortingName = favoriteCharacters.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
            })
            console.log('sortingName', sortingName)
            setFavoriteCharacters([...sortingName])
        }

    }, [isCards, isSort])

    return (
<section>
    <div className={classes.imgcards}>
        <div className={classes.imgcontainer} data-content="Локации" onClick={() => setIsCards(0)}>
            <div className={isCards === 0 ? [classes.imgcard_loc,classes.imgcard_active,classes.imgcard].join(' ') : [classes.imgcard_loc,classes.imgcard].join(' ')}>
                <span>Локации</span>
            </div>
        </div>
        <div className={classes.imgcontainer} data-content="Персонажи" onClick={() => setIsCards(1)}>
            <div className={isCards === 1 ? [classes.imgcard_char,classes.imgcard_active,classes.imgcard].join(' ') : [classes.imgcard_char,classes.imgcard].join(' ')}>
                <span>Персонажи</span>
            </div>
        </div>
        <div className={classes.imgcontainer}  data-content="Эпизоды" onClick={() => setIsCards(2)}>
            <div className={isCards === 2 ? [classes.imgcard_epi,classes.imgcard_active,classes.imgcard].join(' ') : [classes.imgcard_epi,classes.imgcard].join(' ')}>
                <span>Эпизоды</span>
            </div>
        </div>
    </div>
    <div className={classes.favorite__row}>
        {isLoading  ? (
            <Spinner/>
        ) : (
        <>

            {isCards === 1  && (
                <>
                    <button className="sort-button" id="byName" name="sort" value="byName" onClick={() => setIsSort(true)} >
                        по имени
                    </button>
                <div className="char-cards">
                    {resultFavoritesCharacters.length >= 1  &&  (
                        Array.from(favoriteCharacters).map(characters => (
                            <CharctersCard
                                key={characters.id}
                                characters={characters}
                                favoritesResult={resultFavoritesCharacters}
                                setFavorite={setFavoriteCharacters}
                                favorite={favoriteCharacters}
                            />
                        ))
                    )}
                    {resultFavoritesCharacters.length === 1 &&
                        !Array.isArray(favoriteCharacters) && (
                            <CharctersCard
                                characters={favoriteCharacters}
                                favoritesResult={resultFavoritesCharacters}
                                setFavorite={setFavoriteCharacters}
                            />
                        )}
                    {resultFavoritesCharacters.length === 0 && (
                        <p> У вас пока нет избранных персонажей</p>
                    )}
                </div>
                </>

            )}

        {isCards === 0  && (
            <div className="char-cards">
                {resultFavoritesLocations.length > 1 && Array.isArray(favoriteLocations) && (
                    favoriteLocations.map(locations => (
                        <LocationsCard
                            key={locations.id}
                            locations={locations}
                            favoritesResult={resultFavoritesLocations}
                            setFavorite={setFavoriteLocations}
                            favorite={favoriteLocations}
                        />
                    ))
                )}
                {resultFavoritesLocations.length === 1 &&
                    !Array.isArray(favoriteLocations) && (
                        <LocationsCard
                            locations={favoriteLocations}
                            favoritesResult={resultFavoritesLocations}
                            setFavorite={setFavoriteLocations}
                        />
                    )}
                {resultFavoritesLocations.length === 0 && (
                    <p> У вас пока нет избранных локаций</p>
                )}
            </div>
        )}
        {isCards === 2 && (
            <div  className="char-cards char-cards__row">
                {resultFavoritesEpisodes.length > 1 && Array.isArray(favoriteEpisodes) &&  (
                    favoriteEpisodes.map(episodes => (
                        <EpisodesCard
                            key={episodes.id}
                            episodes={episodes}
                            favoritesResult={resultFavoritesEpisodes}
                            setFavorite={setFavoriteEpisodes}
                            favorite={favoriteEpisodes}
                        />
                    ))
                )}
                {resultFavoritesEpisodes.length === 1 &&
                    !Array.isArray(favoriteEpisodes) && (
                        <EpisodesCard
                            episodes={favoriteEpisodes}
                            favoritesResult={resultFavoritesEpisodes}
                            setFavorite={setFavoriteEpisodes}
                        />
                    )}
                {resultFavoritesEpisodes.length === 0  && (
                    <p> У вас пока нет избранных эпизодов</p>
                )}
            </div>

        )}
        </>
            )}
    </div>
    </section>

    );
}

export default FavoritesList;