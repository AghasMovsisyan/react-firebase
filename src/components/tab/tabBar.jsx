//tabBar.jsx
import React from "react";
import { Link } from "react-router-dom";


export const TabBar = ({openModal}) => {
    return (
      <div>
      <Link to="/" className="tab-button">
        List
      </Link>
      <Link to="/chart" className="tab-button">
        Chart
      </Link>
      <button className="create-list-button-outside-modal" onClick={openModal}>
          Create List
      </button>
      <hr></hr>
      </div>  
    )
}

export default TabBar;