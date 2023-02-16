import React, {useState, useEffect, useRef, Fragment} from "react";
import axios from "axios";
import "./index.scss";
import ReactPaginate from 'react-paginate';
import SearchError from "../Filter/SearchError";

const Pagination = ({ isPage, setCharacters, setIsLoading, filterName, filterSpecies, filterStatus, error, setError}) => {

    const [info, setInfo] = useState(1)

    const page = useRef(1)
    const fetchCharacters = async (pageNumber) => {
        try{
            setIsLoading(true)

            let baseUrl = `https://rickandmortyapi.com/api/${isPage}`

            if (pageNumber) {
                baseUrl += `/?page=${pageNumber}`
            }
            let result;

            if (isPage === 'character') {
                result = await axios.get(baseUrl, {
                    params: {
                        name: filterName,
                        species: filterSpecies,
                        status:  filterStatus
                    }
                });
            }
            if (isPage === 'location') {
                result = await axios.get(baseUrl, {
                    params: {
                        name: filterName,
                        type: filterSpecies,
                        dimension:  filterStatus
                    }
                });
            }

            if (isPage === 'episode') {
                result = await axios.get(baseUrl, {
                    params: {
                        name: filterName,
                        episode: filterSpecies,
                        dimension:  filterStatus
                    }
                });
            }


            const pageInfo = result.data.info

            setInfo({
                current: pageNumber,
                pageC: pageInfo.pages,
            })
            setCharacters(result.data.results)
            setError(null)
            setIsLoading(false)
        } catch (e) {
            setError(e.response.status)
        }


    };

    let errorCheck = error === 404


    const pageChangeHandler = ({selected}) => {
        page.current = selected + 1
        console.log(info.pageC)
        fetchCharacters(page.current)
    }


    useEffect(() => {
        fetchCharacters(page.current)
    }, [filterName,page.current,filterSpecies,filterStatus])
    return (
        <Fragment>
            <div className="pagination">
                {!errorCheck && (
                    <ReactPaginate
                        breakLabel=""
                        nextLabel="Следующая"
                        onPageChange={pageChangeHandler}
                        forcePage={page.current - 1}
                        pageRangeDisplayed={5}
                        pageCount={info.pageC}
                        previousLabel="Предыдущая"
                        renderOnZeroPageCount={null}
                        marginPagesDisplayed="0"
                    />

                )}

            </div>
        </Fragment>


    )
};

export default Pagination;