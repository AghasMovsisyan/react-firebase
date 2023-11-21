//costumLisTable.jsx
import React from "react";
import { CustomTable, TableCell, TableHeader, TableRow } from "../../styles/customListStyled";
import "../../App.css";


export const CustomListTable = ({ data, setSelectedItemId, setNewMark, setNewPrice, setNewYear, setNewRating, openModal }) => {
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
          {data.map((item) => (
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
      </div>
    );
  };