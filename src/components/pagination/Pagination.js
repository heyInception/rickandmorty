import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./index.scss";
import ReactPaginate from 'react-paginate';

const Pagination = ({ isPage, setCharacters, setIsLoading }) => {
    const [info, setInfo] = useState(1)
    const page = useRef(1)
    const fetchCharacters = async (pageNumber) => {
        setIsLoading(true)

        let baseUrl = `https://rickandmortyapi.com/api/${isPage}`
        console.log(isPage)

        if (pageNumber) {
            baseUrl += `/?page=${pageNumber}`
        }

        const result = await axios(baseUrl);

        const pageInfo = result.data.info

        setInfo({
            current: pageNumber,
            pageC: pageInfo.pages,
        })
        setCharacters(result.data.results)

        setIsLoading(false)



    };


    const pageChangeHandler = ({selected}) => {
        page.current = selected + 1
        fetchCharacters(page.current)
    }


    useEffect(() => {
        fetchCharacters(page.current)
    }, [])
    return (
        <div className="pagination">
            <ReactPaginate
                breakLabel=""
                nextLabel="next >"
                onPageChange={pageChangeHandler}
                forcePage={page.current - 1}
                pageRangeDisplayed={5}
                pageCount={info.pageC}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                marginPagesDisplayed="0"
            />
        </div>
    )
};

export default Pagination;