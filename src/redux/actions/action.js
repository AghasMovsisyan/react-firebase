// actions.js
import { getDocs, collection } from '@firebase/firestore';
import { db } from '../../services/firebase';

export const UPDATE_DATA = 'UPDATE_DATA';
export const SET_SELECTED_ITEM_ID = 'SET_SELECTED_ITEM_ID';
export const SET_IS_MODAL_OPEN = 'SET_IS_MODAL_OPEN';
export const LIST_DATA = 'LIST_DATA';

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});

export const listData = (dataToUpdate) => ({
  type: LIST_DATA,
  payload: dataToUpdate,
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
