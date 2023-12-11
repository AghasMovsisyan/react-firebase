// userListData.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, listData, setIsModalOpen } from '../redux/actions/action';
import messagesEn from '../translations/en.json';
import messagesArm from '../translations/arm.json';

export const useListData = () => {
  const [locale, setLocale] = useState('en');
  const messages = {
    en: messagesEn,
    arm: messagesArm,
  };

  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.appReducer.isModalOpen);
  const data = useSelector((state) => state.appReducer.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const openModal = (item) => {
    dispatch(setIsModalOpen(true));
    dispatch(
      listData({
        mark: item.mark,
        price: item.price,
        year: item.year,
        rating: item.rating,
      }),
    );
  };

  return {
    isModalOpen,
    data,
    openModal,
    messages,
    locale,
    setLocale,
  };
};

export default useListData;
