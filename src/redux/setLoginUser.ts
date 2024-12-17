import { createSlice } from "@reduxjs/toolkit";
import { usersType } from "./types";

// const initialState: usersType = {
//  userId: "",
//  userName: "",
//  userEmail: "",
//  userPassword: "",
// };

const initialState = {
 user: {
  userId: null,
  userName: null ,
  userEmail: null,
  userPassword: null,
 }, // Currently logged in user
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
   state.status = "pending";
  },
  signInUserSuccess: (state, action) => {
   console.log("signInUserSuccess", state, action);
   const { user_id, user_name, user_email, user_password } = action.payload;
   state.user = {
    userId: user_id,
    userName: user_name,
    userEmail: user_email,
    userPassword: user_password,
   };
   state.status = "complete";
  },
  signInUserFailure: (state, action) => {
   state.error = action.payload;
   state.status = "failed";
  },
 },
});

export const { signInUserRequest, signInUserSuccess, signInUserFailure } =
 setUserLogin.actions;
export default setUserLogin.reducer;
