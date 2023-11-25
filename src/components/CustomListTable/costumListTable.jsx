import React, { useState } from "react";
import { CustomTable, TableCell, TableHeader, TableRow } from "../../styles/customListStyled";
import "../../App.css";
import Pagination from "../pagination/pagination";

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
  console.log("pageCount",pageCount);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  console.log("indexOfLastItem",indexOfLastItem);
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log("indexOfFirstItem",indexOfFirstItem);
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log("currentItems",currentItems);

  return (
    <div>
      <h2>List</h2>
      <CustomTable>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Mark</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Year</TableHeader>
            <TableHeader>Rating</TableHeader>
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
