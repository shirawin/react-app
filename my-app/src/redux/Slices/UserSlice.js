import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'id',
  initialState: {
    users: [],
  },
  reducers: {
    keepUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { keepUser } = userSlice.actions;

export default userSlice.reducer;
