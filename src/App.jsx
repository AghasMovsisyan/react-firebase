//App.jsx
import React, { useState } from "react";
import "./App.css";
import { CustomListContainer } from "./components/CustomListTable/customListStyled";
import Charts from "./components/Chart/Charts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TabBar } from "./components/TabBar/TabBar";
import { useDispatch } from "react-redux";
import { useListData } from "./hook/useListData";
import { setData, setNewMark, setNewPrice, setNewRating, setNewYear, setSelectedItemId } from "./redux/actions/action";
import { CustomListTable } from "./components/CustomListTable/CustomListTable"
import CustomListModal from "./components/CustomListModal/CustomListModal";
import messages_en from "./translations/en.json"
import messages_arm from "./translations/arm.json"
import { IntlProvider } from "react-intl";


function App() {
  const {
    selectedItemId,
    isModalOpen,
    data,
    openModal,
  } = useListData(); 
  const dispatch = useDispatch();

  const [locale, setLocale] = useState('en'); // Default language

  const messages = {
    en: messages_en,
    arm: messages_arm,
  };

  return (
    <IntlProvider  locale={locale} messages={messages[locale]}>
    <Router>
      <CustomListContainer>
        <TabBar openModal={openModal} setLocale={setLocale}/>
        <CustomListModal
          isModalOpen={isModalOpen}
          selectedItemId={selectedItemId}
        />
        <Routes>
          <Route
            path="/"
             element={<CustomListTable
              data={data}
              setSelectedItemId={(id) => dispatch(setSelectedItemId(id))}
              setNewMark={(value) => dispatch(setNewMark(value))}
              setNewPrice={(value) => dispatch(setNewPrice(value))}
              setNewYear={(value) => dispatch(setNewYear(value))}
              setNewRating={(value) => dispatch(setNewRating(value))}
              setData={(value) => dispatch(setData(value))}
              openModal={openModal}
            />}
          />
          <Route path="/chart"  element={<Charts data={data} />} />
        </Routes>
      </CustomListContainer>
    </Router>
  </IntlProvider>
  );
}

export default App;
