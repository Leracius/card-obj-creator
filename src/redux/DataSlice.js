import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'newData',
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteData: (state) => {
      state.data = []; // Asignar un nuevo array vacío al estado
    },
  },
});

export const { setData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;