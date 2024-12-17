import { createAction } from "@reduxjs/toolkit";

export const GET_ALL_PLAYLISTS = "allPlaylists/getAllPlaylists_request"; // need to use different actions names for redux-toolkit actions and saga actions to prevent infinite state mutating ---- i don`t think so, strage why is it works???
// export const CREATE_USER = "newUser/addNewUser_request";
export const CREATE_USER = "newUser/addNewUser";
export const USER_LOGIN = "existingUser/signInUserSuccess"; // 2 actions types;-- request for api request, and success when api requesit is fine

// export const getAllPlaylists = createAction(actions.GET_ALL_PLAYLISTS); // we create action which saga can dispatch, without payload in it, for GET request, becouse redux-toolkit actions are use when data update, create, delete. Here, we only need to get data, then using the createAction method
//using for initialization of asynchronous process, in thise case, using for init process of getting laylists
// export const createNewUser = createAction(actions.CREATE_USER);
export const createNewUser = createAction<{
 login: string;
 email: string;
 password: string;
}>("newUser/addNewUserRequest");

// export const loginUser = createAction(actions.USER_LOGIN);
export const loginUser = createAction<{ email: string; password: string }>(
 "existingUser/signInUserRequest"
);
