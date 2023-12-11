// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Charts } from './components/Chart/Charts';
import { ListContainer } from './components/ListTable/ListTableStyled';
import { TabBar } from './components/TabBar/TabBar';
import { useListData } from './hook/useListData';
import { ListTable } from './components/ListTable/ListTable';
import { ListModal } from './components/ListModal/ListModal';

function App() {
  const { isModalOpen, data, openModal, locale, setLocale, messages } = useListData();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <ListContainer>
          <TabBar openModal={openModal} setLocale={setLocale} />
          <ListModal isModalOpen={isModalOpen} />
          <Routes>
            <Route path="/" element={<ListTable data={data} openModal={openModal} />} />
            <Route path="/chart" element={<Charts data={data} />} />
          </Routes>
        </ListContainer>
      </Router>
    </IntlProvider>
  );
}

export default App;
