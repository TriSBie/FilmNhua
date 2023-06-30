import React, { useState } from 'react'
const getPageStorage = () => {
    if (sessionStorage.getItem("page") !== null) {
        return parseInt(sessionStorage.getItem("page"));
    } else {
        return 1
    }
}
export default function usePagination(films, DATA_PERPAGE) {
    const [currentPage, setCurrentPage] = useState(getPageStorage); //current page
    const maxPage = Math.ceil(films.length / DATA_PERPAGE); //max avaible pages

    function currentData() {
        const begin = (currentPage - 1) * DATA_PERPAGE
        const end = begin + DATA_PERPAGE
        return films.slice(begin, end)
    }

    function next() {
        //always get maxPage when ever currentData is out of range when user click next button
        setCurrentPage(currentData => Math.min(currentData + 1, maxPage))
    }

    function prev() {
        //When current data is always at maxPage value when prev return 0 or negative number
        setCurrentPage(currentData => Math.max(currentData - 1, 1));
    }

    function jump(page) {
        //check does page is valid
        const pageNumber = Math.max(page, 1);
        setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
    }
    return (
        { next, prev, jump, currentData, currentPage, maxPage }
    )
}
