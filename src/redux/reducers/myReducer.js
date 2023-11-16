// myReducer.js
import { createSlice } from '@reduxjs/toolkit';

const myReducer = createSlice({
  name: 'myReducer',
  initialState: { data: [] },
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});


export const { updateData } = myReducer.actions;
export default myReducer.reducer;
