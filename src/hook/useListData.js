// userListData.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setIsModalOpen } from '../redux/actions/action';

export const useListData = () => {
  const dispatch = useDispatch();

  const selectedItemId = useSelector(
    (state) => state.appReducer.selectedItemId,
  );
  const isModalOpen = useSelector((state) => state.appReducer.isModalOpen);
  const data = useSelector((state) => state.appReducer.data);

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
