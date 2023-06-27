import { createSlice } from '@reduxjs/toolkit';

const stringSlice = createSlice({
  name: 'myString',
  initialState: {
    title: 'Titulo',
    subtitle: 'Subtitulo',
    check: 'Confirm',
  },
  reducers: {
    setString: (state, action) => {
      state.title = action.payload;
    },
    setAdditionalValue1: (state, action) => {
      state.subtitle = action.payload;
    },
    setAdditionalValue2: (state, action) => {
      state.check = action.payload;
    },
  },
});

export const { setString, setAdditionalValue1, setAdditionalValue2 } = stringSlice.actions;
export default stringSlice.reducer;
