import React from "react";
import "./App.css";
import { CustomListContainer } from "./styles/customListStyled";
import Charts from "./components/chart/chart";
import { CustomListTable } from "./components/CustomListTable/costumListTable";
import { CustomListModal } from "./components/CostumListModal/costumListModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TabBar } from "./components/tab/tabBar";
import { useDispatch } from "react-redux";
import { useListData } from "./hook/useListData";
import { setNewMark, setNewPrice, setNewRating, setNewYear, setSelectedItemId } from "./redux/reducers/myReducer";


function App() {
  const {
    selectedItemId,
    isModalOpen,
    data,
    openModal,
  } = useListData(); 
  const dispatch = useDispatch();
  return (
    <Router>
      <CustomListContainer>
        <TabBar openModal={openModal} />
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
              openModal={openModal}
            />}
          />
          <Route path="/chart" element={<Charts data={data} />} />
        </Routes>
      </CustomListContainer>
    </Router>
  );
}

export default App;
