import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/UserSlice';

const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export default store;