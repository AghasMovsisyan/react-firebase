// store.js
import { configureStore } from '@reduxjs/toolkit';
import myReducer from './reducers/myReducer';

const store = configureStore({
  reducer: {
    myReducer,
  },
});

export default store;
