//customListStyled.js
import styled from 'styled-components';


export const CustomListContainer = styled.div`
  padding: 20px;
`;

export const CustomTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  height: 25px;

`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const TabButons = styled.div`
`;


export const ListName = styled.h2`
  height: 28px;


`;

export const CreateList = styled.button`
  background-color: #0074cc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0 10px; /* Adjusted padding */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  float: right;
  margin-top: 0px;
  height: 28px; /* Set a fixed height */

  &:hover {
    background-color: #005ba6;
  }
`;
