// myReducer.js
import {   UPDATE_DATA,
  SET_NEW_MARK,
  SET_NEW_PRICE,
  SET_NEW_YEAR,
  SET_NEW_RATING,
  SET_SELECTED_ITEM_ID,
  SET_IS_MODAL_OPEN } from '../actions/actionTypes';

const initialState = {
  data: [],
  newMark: '',
  newPrice: '',
  newYear: '',
  newRating: '',
  selectedItemId: null,
  isModalOpen: false,
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


const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {  
        ...state,
        data: action.payload,
      };  
    case SET_NEW_MARK:
      return {
        ...state,
        newMark: action.payload,
      };
    case SET_NEW_PRICE:
      return {
        ...state,
        newPrice: action.payload,
      };
    case SET_NEW_YEAR:
      return {
        ...state,
        newYear: action.payload,
      };
    case SET_NEW_RATING:
      return {
        ...state,
        newRating: action.payload,
      };
    case SET_SELECTED_ITEM_ID:
      return {
        ...state,
        selectedItemId: action.payload,
      };
    case SET_IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;