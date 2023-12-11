// TabBar.jsx
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Dropbtn,
  Dropdown,
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  Line,
  TabButton,
} from './TabBarStyled';

export const TabBar = ({ setLocale }) => {
  const handleLanguageChange = (locale) => {
    setLocale(locale);
  };

  return (
    <div>
      <TabButton to="/">
        <FormattedMessage id="tab.list" defaultMessage="List" />
      </TabButton>
      <TabButton to="/chart" className="tab-button">
        <FormattedMessage id="tab.chart" defaultMessage="Chart" />
      </TabButton>
      <DropdownContainer>
        <Dropdown>
          <Dropbtn>
            <FormattedMessage id="tab.language" defaultMessage="English" />
          </Dropbtn>
          <DropdownContent>
            <DropdownButton onClick={() => handleLanguageChange('en')}>English</DropdownButton>
            <DropdownButton onClick={() => handleLanguageChange('arm')}>Հայերեն</DropdownButton>
          </DropdownContent>
        </Dropdown>
      </DropdownContainer>
      <Line />
    </div>
  );
};

export default TabBar;
