import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'currentUser',
  initialState: {
    user: [],
  },
  reducers: {
    // keepUser: (state, action) => {
    //   state.user.push(action.payload);
    // },
    keepUser(state, actions) {
      debugger
      return {
          ...state, 
          user: actions.payload,
      } 
  }
  },

});

// Define the second slice
// const slice2 = createSlice({
//   name: 'type',
//   initialState: {
//     type:false
//   },
//   reducers: {
//     userType:(state,action)=>{
//       state.type.push(action.payload);
//     }
//   }
// });




// Combine the slices into a single reducer function
// const rootReducer = combineReducers({
//   slice1: slice1.reducer,
//   slice2: slice2.reducer
// });

// Export the slices and the combined reducer
// export const { actions: slice1Actions } = slice1;
// export const { actions: slice2Actions } = slice2;
// export default rootReducer;


export const { keepUser } = userSlice.actions;

export default userSlice.reducer;
