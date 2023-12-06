//Pagination.jsx
import React from 'react';
import ReactPaginate from 'react-paginate';
import {
  CustomSelect,
  ItemsPerPage,
  PaginationContainer,
  PaginationInfo,
} from './PaginationStyled';
import '../../App.css';
import { FormattedMessage } from 'react-intl';

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
        <FormattedMessage
          id="pagination.rows"
          defaultMessage="Rows per page:"
        ></FormattedMessage>
        <CustomSelect value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </CustomSelect>
      </ItemsPerPage>
      <PaginationInfo>
        <FormattedMessage
          id="pagination.current"
          defaultMessage="Page {currentPage} of {pageCount}"
          values={{
            currentPage: currentPage + 1,
            pageCount: pageCount,
          }}
        ></FormattedMessage>
      </PaginationInfo>
      <ReactPaginate
        previousLabel={
          <FormattedMessage
            id="pagination.previous"
            defaultMessage="Previous"
          ></FormattedMessage>
        }
        nextLabel={
          <FormattedMessage
            id="pagination.next"
            defaultMessage="Next"
          ></FormattedMessage>
        }
        pageClassName={'page-item'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={'pagination'}
        activeClassName={'active'}
        onPageChange={handlePageChange}
        forcePage={currentPage}
      />
    </PaginationContainer>
  );
};

export default Pagination;
