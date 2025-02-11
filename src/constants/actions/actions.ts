import { createAction } from "@reduxjs/toolkit";

export const GET_ALL_PLAYLISTS = "allPlaylists/getAllPlaylists_request";

export const createUserRequest = createAction<{
 login: string;
 email: string;
 password: string;
}>("authUser/addNewUserRequest");

export const logInUserRequest = createAction<{
 email: string;
 password: string;
}>("authUser/signInUserRequest");

export const logoutUser = createAction("authUser/Logout");
