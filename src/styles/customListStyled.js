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
