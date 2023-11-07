import React from "react";
import { CustomTable, TableCell, TableHeader, TableRow } from "./customListStyled";
import "./App.css";


export const CustomListTable = ({ data, setSelectedItemId, setNewmark, setNewprice, setNewyear, setNewrating, openModal }) => {
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
                setNewmark(item.mark);
                setNewprice(item.price);
                setNewyear(item.year);
                setNewrating(item.rating);
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