import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../components/CardForm/CardForm';

interface DataState {
  data: FormData[]; 
}

const initialState: DataState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'newData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<FormData>) => {
      state.data.push(action.payload);
    },
    deleteData: (state) => {
      state.data = [];
    },
  },
});

export const { setData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;
