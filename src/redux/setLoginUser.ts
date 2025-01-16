import { createSlice } from "@reduxjs/toolkit";
import { usersType } from "./types";

// const initialState: usersType = {
//  userId: "",
//  userName: "",
//  userEmail: "",
//  userPassword: "",
// };

// const initialState = {
//  user: {
//   userId: null,
//   userName: null,
//   userEmail: null,
//   userPassword: null,
//  }, // Currently logged in user
//  error: null, // Any error that occurred during login
//  status: "idle", // Status of the login process (idle, pending, complete, failed)
// };

const initialState = {
 user: {}, // Currently logged in user
 error: null, // Any error that occurred during login
 status: "idle", // Status of the login process (idle, pending, complete, failed)
};

const setUserLogin = createSlice({
 // combines actions and reducers
 name: "existingUser",
 initialState,
 reducers: {
  signInUserRequest: (state, action) => {
   state.user = action.payload;
   state.error = null;
   state.status = "pending";
  },
  signInUserSuccess: (state, action) => {
   console.log("signInUserSuccess", state, action);
   //    const { user_id, user_name, user_email, user_password } = action.payload;
   const { name, id, email } = action.payload;

   state.user = {
    userId: id,
    userName: name,
    userEmail: email,
    // userPassword: user_password,
   };
   state.error = null;
   state.status = "complete";

   console.log(state.user);
  },

  signInUserFailure: (state, action) => {
   console.log("signInUserFailure", state, action);
   state.user = initialState.user;
   state.error = action.payload;
   state.status = "failed";
  },
 },
});

export const { signInUserRequest, signInUserSuccess, signInUserFailure } =
 setUserLogin.actions;
export default setUserLogin.reducer;
