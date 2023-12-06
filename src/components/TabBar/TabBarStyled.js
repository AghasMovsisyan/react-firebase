//customTabBarStyled.js
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropbtn = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  height: 39px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const DropdownButton = styled.button`
  color: #333;
  padding: 10px;
  text-decoration: none;
  display: block;
  background-color: #fff;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Dropdown = styled.div`
  &:hover ${DropdownContent} {
    display: block;

  &:hover ${Dropbtn} {
    background-color: #f1f1f1;
  }
`;

export const Line = styled.hr``;
