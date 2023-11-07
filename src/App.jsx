import React, { useState, useEffect } from "react";
import "./App.css";
import {collection,getDocs,addDoc,updateDoc,doc,} from "firebase/firestore";
import { db } from "./firebase";
import {CustomListContainer,} from "./customListStyled";
import Charts from "./chart";
import { CustomListTable } from "./costumListTable";
import { CustomListModal } from "./costumListModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TabBar } from "./tabBar";


function App() {
  const listCollectionRef = collection(db, "list");
  const [newmark, setNewmark] = useState("");
  const [newprice, setNewprice] = useState("");
  const [newyear, setNewyear] = useState("");
  const [newrating, setNewrating] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [list, setList] = useState([]);
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
      } else {
        console.error("Invalid data. Update canceled.");
      }
    }
  };
  

  useEffect(() => {
    const getlist = async () => {
      const data = await getDocs(listCollectionRef);
      const listData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setList(listData);
    };

    getlist();
  }, [listCollectionRef]);

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
            list={list}
            setSelectedItemId={setSelectedItemId}
            setNewmark={setNewmark}
            setNewprice={setNewprice}
            setNewyear={setNewyear}
            setNewrating={setNewrating}
            openModal={openModal}
          />} />
         <Route path="/chart" element={<Charts
            list={list} />
          }/>
        </Routes>
      </CustomListContainer>
    </Router>   
);
}

export default App;
