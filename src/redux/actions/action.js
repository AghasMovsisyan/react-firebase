// actions.js
import { getDocs, collection } from "@firebase/firestore";
import { db } from "../../services/firebase";
import { SET_DATA, SET_IS_MODAL_OPEN, SET_NEW_MARK, SET_NEW_PRICE, SET_NEW_RATING, SET_NEW_YEAR, SET_SELECTED_ITEM_ID, UPDATE_DATA } from "./actionTypes";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, "list"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(updateData(data)); // Dispatch action to update Redux store
    } catch (error) {
    }
  };
};

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});


export const setNewMark = (mark) => ({
  type: SET_NEW_MARK,
  payload: mark,
});

export const setNewPrice = (price) => ({
  type: SET_NEW_PRICE,
  payload: price,
});

export const setNewYear = (year) => ({
  type: SET_NEW_YEAR,
  payload: year,
});

export const setNewRating = (rating) => ({
  type: SET_NEW_RATING,
  payload: rating,
});

export const setSelectedItemId = (itemId) => ({
  type: SET_SELECTED_ITEM_ID,
  payload: itemId,
});

export const setIsModalOpen = (isOpen) => ({
  type: SET_IS_MODAL_OPEN,
  payload: isOpen,
});

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data
  };
};