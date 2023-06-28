import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value1: '#201E50',
  value2: '#C4F1BE',
  value3: '#525B76',
  value4: '#657091',
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    updateValue1: (state, action) => {
      state.value1 = action.payload;
    },
    updateValue2: (state, action) => {
      state.value2 = action.payload;
    },
    updateValue3: (state, action) => {
      state.value3 = action.payload;
    },
    updateValue4: (state, action) => {
      state.value4 = action.payload;
    },
  },
});

export const {
  updateValue1,
  updateValue2,
  updateValue3,
  updateValue4,
} = mySlice.actions;

export default mySlice.reducer;
