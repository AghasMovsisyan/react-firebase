// Pagination.jsx
import React from 'react';
import ReactPaginate from 'react-paginate';
import { FormattedMessage } from 'react-intl';
import {
  Select,
  ItemsPerPage,
  PaginationContainer,
  PaginationInfo,
} from './PaginationStyled';
import '../../App.css';

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
        />
        <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </Select>
      </ItemsPerPage>
      <PaginationInfo>
        <FormattedMessage
          id="pagination.current"
          defaultMessage="Page {currentPage} of {pageCount}"
          values={{
            currentPage: currentPage + 1,
            pageCount,
          }}
        />
      </PaginationInfo>
      <ReactPaginate
        previousLabel={
          <FormattedMessage
            id="pagination.previous"
            defaultMessage="Previous"
          />
        }
        nextLabel={
          <FormattedMessage id="pagination.next" defaultMessage="Next" />
        }
        pageClassName="page-item"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
        activeClassName="active"
        onPageChange={handlePageChange}
        forcePage={currentPage}
      />
    </PaginationContainer>
  );
};

export default Pagination;
