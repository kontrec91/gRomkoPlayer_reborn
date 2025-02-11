import { PayloadAction } from "@reduxjs/toolkit";
import { userLogin } from "../../api/loginUser";
import { put, call } from "redux-saga/effects";
import { signInUserFailure, signInUserSuccess } from "../authSlice";

export function* handleLogin({
 payload: { email, password },
}: PayloadAction<{
 email: string;
 password: string;
}>): Generator<any, void, any> {
 try {
  const user = yield call(userLogin, email, password);
  yield put(signInUserSuccess(user));
 } catch (error: any) {
  yield put(signInUserFailure(error.message));
 }
}
