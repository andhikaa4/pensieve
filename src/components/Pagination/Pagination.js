import React from "react";

import {ChevronRight, ChevronLeft} from 'react-bootstrap-icons'

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="d-flex">
            <div style={{cursor:"pointer"}} onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} >
                <ChevronLeft/>
            </div>
            <div style={{cursor:"pointer"}} onClick={() => currentPage < pages.length && setCurrentPage(currentPage + 1)}>
                <ChevronRight/>
            </div>
        </div>
    );
}

export default Pagination