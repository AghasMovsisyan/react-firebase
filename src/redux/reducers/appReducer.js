//myReducer.js
import {
  UPDATE_DATA,
  SET_NEW_MARK,
  SET_NEW_PRICE,
  SET_NEW_YEAR,
  SET_NEW_RATING,
  SET_SELECTED_ITEM_ID,
  SET_IS_MODAL_OPEN,
  SET_DATA,
} from '../actions/actionTypes';

const initialState = {
  data: [],
  newMark: '',
  newPrice: '',
  newYear: '',
  newRating: '',
  selectedItemId: null,
  isModalOpen: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

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
