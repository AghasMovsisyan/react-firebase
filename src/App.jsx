//App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import { collection,addDoc,updateDoc,doc } from "firebase/firestore";
import { db } from "./services/firebase";
import { CustomListContainer } from "./styles/customListStyled";
import Charts from "./components/chart/chart";
import { CustomListTable } from "./components/CustomListTable/costumListTable";
import { CustomListModal } from "./components/CostumListModal/costumListModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TabBar } from "./components/tab/tabBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions/action";


function App() {
  const listCollectionRef = collection(db, "list");
  const [newmark, setNewmark] = useState("");
  const [newprice, setNewprice] = useState("");
  const [newyear, setNewyear] = useState("");
  const [newrating, setNewrating] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
    setNewmark("");
    setNewprice("");
    setNewyear("");
    setNewrating("");
  };

  const dispatch = useDispatch();

  // Access state
  const data = useSelector((state) => state.myReducer.data);
  console.log("data",data);

  // Dispatch your fetchData action
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const createList = async () => {
    if (newmark.trim() === "" || newprice.trim() === "" || newyear.trim() === "" || newrating.trim() === "") {
      return;
    }
  
    await addDoc(listCollectionRef, { mark: newmark, price: newprice, year: newyear, rating: newrating });
    setNewmark("");
    setNewprice("");
    setNewyear("");
    setNewrating("");
    closeModal();

    // Refresh the list
    dispatch(fetchData());
  };
  
  const updateListItem = async () => {
    if (selectedItemId) {
      // Check if all required fields are defined and not empty
      if (newmark !== undefined && newprice !== undefined && newyear !== undefined && newrating !== undefined) {
        const listDoc = doc(db, "list", selectedItemId);
        await updateDoc(listDoc, { mark: newmark, price: newprice, year: newyear, rating: newrating });
        setNewmark("");
        setNewprice("");
        setNewyear("");
        setNewrating("");
        closeModal();
  
        // Refresh the list
        dispatch(fetchData());
      } else {
        console.error("Invalid data. Update canceled.");
      }
    }
  };


  return (
    <Router>
      <CustomListContainer>

        <TabBar
          openModal={openModal}
        />

        <CustomListModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          newmark={newmark}
          setNewmark={setNewmark}
          newprice={newprice}
          setNewprice={setNewprice}
          newyear={newyear}
          setNewyear={setNewyear}
          newrating={newrating}
          setNewrating={setNewrating}
          selectedItemId={selectedItemId}
          updateListItem={updateListItem}
          createList={createList}
          openModal={openModal}
        />

        <Routes>
          <Route path="/" element={<CustomListTable
            data={data}
            setSelectedItemId={setSelectedItemId}
            setNewmark={setNewmark}
            setNewprice={setNewprice}
            setNewyear={setNewyear}
            setNewrating={setNewrating}
            openModal={openModal}
          />} />
         <Route path="/chart" element={<Charts
            data={data} />
          }/>
        </Routes>
      </CustomListContainer>
    </Router>   
);
}

export default App;
