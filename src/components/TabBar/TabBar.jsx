//TabBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Dropbtn, Dropdown, DropdownButton, DropdownContainer, DropdownContent, Line } from "./customTabBarStyled";
import { FormattedMessage } from "react-intl";

export const TabBar = ({ setLocale }) => {
  const handleLanguageChange = (locale) => {
    setLocale(locale);
  };

  return (
    <div>
      <Link to="/" className="tab-button">
        <FormattedMessage id="tab.list" defaultMessage="List" />
      </Link>
      <Link to="/chart" className="tab-button">
        <FormattedMessage id="tab.chart" defaultMessage="Chart" />
      </Link>
      <DropdownContainer>
        <Dropdown>
          <Dropbtn>
            <FormattedMessage id="tab.language" defaultMessage="English" />
          </Dropbtn>
          <DropdownContent>
            <DropdownButton onClick={() => handleLanguageChange("en")}>
              English
            </DropdownButton>
            <DropdownButton onClick={() => handleLanguageChange("arm")}>
              Հայերեն
            </DropdownButton>
          </DropdownContent>
        </Dropdown>
      </DropdownContainer>
      <Line></Line>
    </div>
  );
};

export default TabBar;
