import React from 'react';
import noResults from "../../assets/img/no_results_img.778e8540.png"

const SearchError = () => {
    return  (
        <div className="noResultMessage">
            <img src={noResults} alt=""/>
            <p>Увы. Кажется такого персонажа не сущесвтует.</p>
        </div>

    );
};

export default SearchError;