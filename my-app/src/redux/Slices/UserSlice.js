import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
<<<<<<< HEAD
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: () => null,
=======
    // keepUser: (state, action) => {
    //   state.user.push(action.payload);
    // },
    keepUser(state, actions) {
      return {
          ...state, 
          user: actions.payload,
      } 
  }
>>>>>>> 63d5fe0ab2381219928541f59a73c78ef815fb88
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;