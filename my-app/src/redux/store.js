import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
