import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {value1: string, value2: string, value3: string, value4: string} = {
  value1: '#201E50',
  value2: '#C4F1BE',
  value3: '#525B76',
  value4: '#657091',
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    updateValue1: (state, action: PayloadAction<string>) => {
      state.value1 = action.payload;
    },
    updateValue2: (state, action: PayloadAction<string>) => {
      state.value2 = action.payload;
    },
    updateValue3: (state, action: PayloadAction<string>) => {
      state.value3 = action.payload;
    },
    updateValue4: (state, action: PayloadAction<string>) => {
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
