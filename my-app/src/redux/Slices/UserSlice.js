import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: () => null,
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;