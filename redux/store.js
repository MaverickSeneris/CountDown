import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/addTimer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
