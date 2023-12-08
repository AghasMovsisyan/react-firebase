// actions.js
import { getDocs, collection } from '@firebase/firestore';
import { db } from '../../services/firebase';
import {
  LIST_DATA,
  SET_IS_MODAL_OPEN,
  SET_SELECTED_ITEM_ID,
  UPDATE_DATA,
} from './actionTypes';

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});

export const listData = (dataToUpdate) => ({
  type: LIST_DATA,
  payload: dataToUpdate,
});

export const setSelectedItemId = (itemId) => ({
  type: SET_SELECTED_ITEM_ID,
  payload: itemId,
});

export const setIsModalOpen = (isOpen) => ({
  type: SET_IS_MODAL_OPEN,
  payload: isOpen,
});

export const fetchData = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'list'));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(updateData(data)); // Dispatch action to update Redux store
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
