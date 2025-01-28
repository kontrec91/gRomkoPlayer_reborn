// import { call, put } from "redux-saga/effects";
import { api } from "../utils/api";
// import { PayloadAction } from "@reduxjs/toolkit";
// import { addNewUser, addNewUserSuccess } from "../redux/setNewUser";
// import { createNewUser } from "../redux/sagas/sagas";
// import { addNewUserSuccess } from "../redux/setNewUser";
import * as endpoints from "../constants/endpoints";
import { jwtDecode } from "jwt-decode";
import { tokenManager } from "../utils/tokenManager";

// export function* addUser({
//  payload: { login, password, email },
// }: PayloadAction<{
//  login: string;
//  email: string;
//  password: string;
// }>): Generator<any, void, any> {
//  //data will passed from action.payload
//  try {
//   console.log("Sending user data:", {
//    user_name: login,
//    user_email: email,
//    user_password: password,
//   });

//   const res = yield call(api.post, endpoints.CREATE_USER, {
//    user_name: login,
//    user_email: email,
//    user_password: password,
//   });
//   console.log("res", res);
//   //yield put(addNewUser(res.data)); // Отправляем полученные данные в редуктор, Calling this redux#ActionCreator with an argument will return a PayloadAction of type T with a payload of P
//   yield put(addNewUserSuccess(res.data));
//  } catch (error) {
//   // Обработка ошибок
//   console.log("ERROR", error);
//   throw new Error("Something went wrong");
//  }
// }

export const userRegistration = async (
 login: string,
 email: string,
 password: string
) => {
 try {
  const res = await api.post(endpoints.CREATE_USER, {
   user_name: login,
   user_email: email,
   user_password: password,
  });
  const token = res.data.accessToken;
  tokenManager.setAuthToken(token);
  const decoded = jwtDecode(token);
  return decoded;
 } catch (error: any) {
  console.log("ERROR", error);
  throw new Error(error.response.data.message);
 }
};
