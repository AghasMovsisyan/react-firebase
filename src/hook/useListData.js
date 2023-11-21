//userListData.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions/action";
import {  setIsModalOpen } from "../redux/reducers/myReducer";

export const useListData = () => {
  const dispatch = useDispatch();

  
  const selectedItemId = useSelector((state) => state.myReducer.selectedItemId);
  const isModalOpen = useSelector((state) => state.myReducer.isModalOpen);
  const data = useSelector((state) => state.myReducer.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const openModal = () => {
    dispatch(setIsModalOpen(true));
  };


  return {
    selectedItemId,
    isModalOpen,
    data,
    openModal,
  };
};
