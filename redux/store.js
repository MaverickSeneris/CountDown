import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistedReducer from './reducers/reducers';
import {persistStore} from 'redux-persist'

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
export default store;
