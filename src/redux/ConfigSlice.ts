import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StringState {
  title: string;
  subtitle: string;
  check: string;
}

const initialState: StringState = {
  title: 'Titulo',
  subtitle: 'Subtitulo',
  check: 'Confirm',
};

const stringSlice = createSlice({
  name: 'myString',
  initialState,
  reducers: {
    setConfig1: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setConfig2: (state, action: PayloadAction<string>) => {
      state.subtitle = action.payload;
    },
    setConfig3: (state, action: PayloadAction<string>) => {
      state.check = action.payload;
    },
  },
});

export const { setConfig1, setConfig2, setConfig3 } = stringSlice.actions;
export default stringSlice.reducer;
