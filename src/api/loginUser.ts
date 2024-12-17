import { PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api";
import { call, put } from "redux-saga/effects";
// import { loginUser } from "../redux/sagas/sagas";
// import { signInUserSuccess } from "../redux/setLoginUser";

import * as endpoints from "../constants/endpoints";
import { AxiosError } from "axios";
// import { AxiosResponse } from "axios";

// export function* userLogin({
//  payload: { email, password },
// }: PayloadAction<{
//  email: string;
//  password: string;
// }>): Generator<any, void, any> {
//  try {
//   console.log("Sending user data:", {
//    user_email: email,
//    user_password: password,
//   });

//   const res = yield call(api.post, endpoints.LOGIN_USER, {
//    user_email: email,
//    user_password: password,
//   });

//   console.log("res", res.data);

//   //   yield put(loginUser(res.data)); // --- infinite request
//   //   if(){
//   //   }
//   yield put(signInUserSuccess(res.data));
//  } catch (error) {
//   throw new Error("Something went wrong");
//   //yield put(signInUserError(res.data))
//  }
// }

export const userLogin = async (email: string, password: string) => {
 try {
  console.log("Sending user data:", {
   user_email: email,
   user_password: password,
  });

  const res = await api.post(endpoints.LOGIN_USER, {
   user_email: email,
   user_password: password,
  });

  console.log("res", res.data);
  return res.data;
 } catch (error: any) {
  console.log(error);
  throw new Error(error.response.data.message);

  //   throw new Error(error.response.data.error || "Something went wrong");
  //   throw new Error("Something went wrong");
 }
};

// (method) Axios.post<T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>
//     : Promise<R>

//     (method) Axios.get<T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
