import { createSlice } from '@reduxjs/toolkit';

const stringSlice = createSlice({
  name: 'myString',
  initialState: {
    title: 'Titulo',
    subtitle: 'Subtitulo',
    check: 'Confirm',
  },
  reducers: {
    setConfig1: (state, action) => {
      state.title = action.payload;
    },
    setConfig2: (state, action) => {
      state.subtitle = action.payload;
    },
    setConfig3: (state, action) => {
      state.check = action.payload;
    },
  },
});

export const { setConfig1, setConfig2, setConfig3 } = stringSlice.actions;
export default stringSlice.reducer;
