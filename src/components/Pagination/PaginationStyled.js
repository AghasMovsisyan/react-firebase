//customPagination.js
import styled from 'styled-components';

export const PagniationInfo = styled.div`
  display: flex;
  justify-content: right;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px; /* Adjust margin as needed */
`;

export const PaginationInfo = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
`;

export const ItemsPerPage = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
`;

export const CustomSelect = styled.select`
  padding: 4px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
  margin-left: 2px;
  outline: none;
  transition:
    border-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover {
    border-color: #9e9e9e;
  }

  &:focus {
    border-color: #1976d2;
    box-shadow: 0 0 0 0.2rem rgba(25, 118, 210, 0.25);
  }

  &::after {
    content: '\\25BC'; /* Unicode for the down arrow */
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    color: #757575; /* Arrow color */
  }
`;
