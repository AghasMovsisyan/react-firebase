//TabBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CreateList } from "./customBottomsStyled";


export const TabBar = ({openModal}) => {
    return (
      <div>
      <Link to="/" className="tab-button">
        List
      </Link>
      <Link to="/chart" className="tab-button">
        Chart
      </Link>
      <CreateList onClick={openModal}>
        Create List
      </CreateList>
      <hr></hr>
      </div>  
    )
}

export default TabBar;