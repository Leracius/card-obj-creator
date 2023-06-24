import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './DataSlice';

const store = configureStore({
  reducer: {
    newData: dataReducer,
  },
});

export default store;