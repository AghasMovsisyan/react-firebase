// costumTabButtonsStyled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TabButton = styled(Link)`
  text-transform: uppercase;
  color: #201e1e; /* Text color */
  text-decoration: none;
  padding: 10px 15px; /* Adjust padding to increase/decrease tab size */
  margin: 0;
  font-size: 17px; /* Font size */
  cursor: pointer;
  transition: background-color 0.3s;
`;

export default TabButton;
