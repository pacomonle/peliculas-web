import React from "react";
// importar libreria
import Pagination from "rc-pagination";

import "./pagination.scss";

const PaginationMovies = (props) => {
  const { currentPage, totalItems, onChangePage } = props;

  return (
      
    <Pagination 
           className="pagination" 
           current={currentPage}
           total={totalItems}
           pageSize={20}
           onChange={onChangePage}
    />
           
           )
};

export default PaginationMovies;
