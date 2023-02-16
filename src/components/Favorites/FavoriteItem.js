// import React from 'react';
//
//
// const FavoriteItem = ({
//                           characters,
//                           locations,
//                           episodes,
//                           favoritesResult,
//                           setFavorite,
//                           favorite,
//                           isCards
// }) => {
//
//
//     function buttonRemove (event) {
//         const $el = event.target
//         const id = Number($el.dataset.id)
//
//         if (id) {
//             let users = JSON.parse(localStorage.getItem('users')) || []
//             let usersAuth = JSON.parse(localStorage.getItem('authUsers')) || []
//             if(characters) {
//                 if (favoritesResult.includes(id)) {
//                     for(let i = 0; users.length > i; i++) {
//                         if (users[i].email === usersAuth[0].login) {
//                             users[i].favoritesCharacters = users[i].favoritesCharacters.filter(fId => fId !== id)
//                             // setFavorite(prev => {
//                             //     // favorite.filter(fId => fId !== id)
//                             //     return {
//                             //         ...prev,
//                             //         [event.target.id]: favorite.filter(fId => fId !== id)
//                             //     }
//                             //
//                             // })
//                             if (!Array.isArray(favorite)) {
//                                 setFavorite([])
//
//                             } else {
// for( let j = 0 ; j < favorite.length; j++) {
//     if (favorite[j].id === id) {
//         favorite.splice(j, 1)
//         if ([...favorite].length == 1 ) {
//             setFavorite([...favorite][0])
//         } else {
//             setFavorite([...favorite])
//         }
//     }
// }}
//
//                             // let baseUrl = `https://rickandmortyapi.com/api/character/${users[i].favoritesCharacters}`
//                             // axios.get(baseUrl).then((response) => {
//                             //     setFavorite(response.data)
//                             // });
//
//                         }
//                     }
//
//                 }
//             }
//             if(locations) {
//                 if (favoritesResult.includes(id)) {
//                     for(let i = 0; users.length > i; i++) {
//                         if (users[i].email === usersAuth[0].login) {
//                             users[i].favoritesLocations = users[i].favoritesLocations.filter(fId => fId !== id)
//                             if (!Array.isArray(favorite)) {
//                                 setFavorite([])
//
//                             } else {
//                                 for( let j = 0 ; j < favorite.length; j++) {
//                                     if (favorite[j].id === id) {
//                                         favorite.splice(j, 1)
//                                         if ([...favorite].length == 1 ) {
//                                             setFavorite([...favorite][0])
//                                         } else {
//                                             setFavorite([...favorite])
//                                         }
//                                     }
//                                 }}
//                         }
//                     }
//
//                 }
//             }
//             if(episodes) {
//                 console.log(id)
//                 if (favoritesResult.includes(id)) {
//                     for(let i = 0; users.length > i; i++) {
//                         if (users[i].email === usersAuth[0].login) {
//                             users[i].favoritesEpisodes = users[i].favoritesEpisodes.filter(fId => fId !== id)
//                             if (!Array.isArray(favorite)) {
//                                 setFavorite([])
//
//                             } else {
//                                 for( let j = 0 ; j < favorite.length; j++) {
//                                     if (favorite[j].id === id) {
//                                         favorite.splice(j, 1)
//                                         if ([...favorite].length == 1 ) {
//                                             setFavorite([...favorite][0])
//                                         } else {
//                                             setFavorite([...favorite])
//                                         }
//                                     }
//                                 }}
//                         }
//                     }
//
//                 }
//             }
//
//             localStorage.setItem('users', JSON.stringify(users))
//
//         }
//     }
//
//
//     return (
//         <>
//             {characters && (
//                 <div className="character-card">
//                     <div className="character-img">
//                         <img src={characters.image} alt="" />
//                     </div>
//                     <div className="character-card__content">
//                         <div className="character-card__title">
//                             <h3>{characters.name}</h3>
//                             <span className="status">
//                         <span className="status-icon" ></span>
//                                 {characters.status}
//                         </span>
//                         </div>
//                         <div className="character-card__list">
//                             <ul>
//                                 <li>Раса:</li>
//                                 <li>{characters.species}</li>
//                             </ul>
//                             {/*<ul>*/}
//                             {/*    <li>Место происхождения:</li>*/}
//                             {/*    <li>{characters.origin.name}</li>*/}
//                             {/*</ul>*/}
//                             {/*<ul>*/}
//                             {/*    <li>Последняя локация:</li>*/}
//                             {/*    <li>{characters.id}</li>*/}
//                             {/*</ul>*/}
//                         </div>
//                     </div>
//                     <div className="character-card__add-favorites">
//                         <button onClick={buttonRemove} data-id={characters.id} className="character-card__add-favorites_remove"></button>
//                     </div>
//                 </div>
//             )}
//             {locations && (
//                 <div className="character-card">
//                     <div className="character-card__content">
//                         <div className="character-card__title">
//                             <h3>{locations.name}</h3>
//                             <span className="status">
//                         <span className="status-icon">{locations.type}</span>
//                         <span className="status-icon">{locations.dimension}</span>
//                         </span>
//                             {/*<span className="status-icon">{Locations.residents.length}</span>*/}
//
//                         </div>
//                     </div>
//                     <div className="character-card__add-favorites">
//                         <button onClick={buttonRemove} data-id={locations.id} className="character-card__add-favorites_remove"></button>
//                     </div>
//                 </div>
//             )}
//             {episodes  && (
//                 <div className="character-card">
//                     <div className="character-card__content">
//                         <div className="character-card__title">
//                             <h3>{episodes.name}</h3>
//                             <span className="status">
//                         <span className="status-icon"></span>
//                         </span>
//                         </div>
//                         <div className="character-card__wrapper">
//                             <div className="character-card__list">
//                                 <ul>
//                                     <li>Эпизод:</li>
//                                     <li>{episodes.episode}</li>
//                                 </ul>
//                                 <ul>
//                                     <li>Дата выхода:</li>
//                                     <li>{episodes.air_date}</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="character-card__add-favorites">
//                         <button onClick={buttonRemove} data-id={episodes.id} className="character-card__add-favorites_remove"></button>
//                     </div>
//                 </div>
//
//             )}
//
//         </>
//
//     );
// };
//
// export default FavoriteItem;