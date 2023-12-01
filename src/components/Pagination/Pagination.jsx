//Pagination.jsx
import React from "react";
import ReactPaginate from "react-paginate";
import { CustomSelect, ItemsPerPage, PaginationContainer, PaginationInfo } from "./customPagination";
import "../../App.css";


const Pagination = ({
  itemsPerPage,
  handleItemsPerPageChange,
  currentPage,
  pageCount,
  handlePageChange,
}) => {
  return (
    <PaginationContainer>
      <ItemsPerPage>
        Rows per page:
        <CustomSelect value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </CustomSelect>
      </ItemsPerPage>
      <PaginationInfo>
        Page {currentPage + 1} of {pageCount}
      </PaginationInfo>
      <ReactPaginate
        
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageClassName={"page-item"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        activeClassName={"active"}
        onPageChange={handlePageChange}
        forcePage={currentPage} 
      />
    </PaginationContainer>
  );
};

export default Pagination;
