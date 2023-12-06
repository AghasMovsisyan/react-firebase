//CustomLisTable.jsx
import React, { useState } from 'react';
import {
  CreateList,
  CustomTable,
  ListName,
  TableCell,
  TableHeader,
  TableRow,
} from './ListTableStyled';
import '../../App.css';
import Pagination from '../Pagination/Pagination';
import { FormattedMessage } from 'react-intl';

export const CustomListTable = ({
  data,
  setSelectedItemId,
  setNewMark,
  setNewPrice,
  setNewYear,
  setNewRating,
  openModal,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleItemsPerPageChange = (e) => {
    const selectedItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(0);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <CreateList onClick={openModal}>
        <FormattedMessage id="table.createList" defaultMessage="Create List" />
      </CreateList>
      <ListName>
        <FormattedMessage id="table.List" defaultMessage="List" />
      </ListName>
      <CustomTable>
        <thead>
          <TableRow>
            <TableHeader>
              <FormattedMessage
                id="table.id"
                defaultMessage="Id"
              ></FormattedMessage>
            </TableHeader>
            <TableHeader>
              <FormattedMessage
                id="table.mark"
                defaultMessage="Mark"
              ></FormattedMessage>
            </TableHeader>
            <TableHeader>
              <FormattedMessage
                id="table.price"
                defaultMessage="Price"
              ></FormattedMessage>
            </TableHeader>
            <TableHeader>
              <FormattedMessage
                id="table.year"
                defaultMessage="Year"
              ></FormattedMessage>
            </TableHeader>
            <TableHeader>
              <FormattedMessage
                id="table.rating"
                defaultMessage="Rating"
              ></FormattedMessage>
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => {
                setSelectedItemId(item.id);
                setNewMark(item.mark);
                setNewPrice(item.price);
                setNewYear(item.year);
                setNewRating(item.rating);
                openModal();
              }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.mark}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.rating}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </CustomTable>
      <Pagination
        itemsPerPage={itemsPerPage}
        handleItemsPerPageChange={handleItemsPerPageChange}
        currentPage={currentPage}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default CustomListTable;
