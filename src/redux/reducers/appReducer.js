// myReducer.js
import {
  UPDATE_DATA,
  SET_SELECTED_ITEM_ID,
  SET_IS_MODAL_OPEN,
  LIST_DATA,
} from '../actions/actionTypes';

const initialState = {
  data: [],
  newMark: '',
  newPrice: '',
  newYear: '',
  newRating: '',
  selectedItemId: null,
  isModalOpen: false,
  dataToUpdate: {
    mark: '',
    price: '',
    year: '',
    rating: '',
  },
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
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
    case LIST_DATA:
      return {
        ...state,
        dataToUpdate: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;
