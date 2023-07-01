import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stringReducer from './ConfigSlice'
import dataReducer from './DataSlice';
//persist
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  newData: dataReducer,
  myString: stringReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
