// App.jsx
import React, { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Charts } from './components/Chart/Charts';
import { ListContainer } from './components/ListTable/ListTableStyled';
import { TabBar } from './components/TabBar/TabBar';
import { useListData } from './hook/useListData';
import { listData, setSelectedItemId } from './redux/actions/action';
import { ListTable } from './components/ListTable/ListTable';
import { ListModal } from './components/ListModal/ListModal';
import messagesEn from './translations/en.json';
import messagesArm from './translations/arm.json';

function App() {
  const { selectedItemId, isModalOpen, data, openModal } = useListData();
  const dispatch = useDispatch();

  const [locale, setLocale] = useState('en'); // Default language

  const messages = {
    en: messagesEn,
    arm: messagesArm,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <ListContainer>
          <TabBar openModal={openModal} setLocale={setLocale} />
          <ListModal
            isModalOpen={isModalOpen}
            selectedItemId={selectedItemId}
          />
          <Routes>
            <Route
              path="/"
              element={
                <ListTable
                  data={data}
                  setSelectedItemId={(id) => dispatch(setSelectedItemId(id))}
                  listData={(value) => dispatch(listData(value))}
                  openModal={openModal}
                />
              }
            />
            <Route path="/chart" element={<Charts data={data} />} />
          </Routes>
        </ListContainer>
      </Router>
    </IntlProvider>
  );
}

export default App;
