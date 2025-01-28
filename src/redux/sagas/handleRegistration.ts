import { PayloadAction } from "@reduxjs/toolkit";
import { addNewUserFailure, addNewUserRequest } from "../authSlice";
import { call, put } from "redux-saga/effects";
import { userRegistration } from "../../api/createUser";

export function* handleRegistration({
 payload: { login, email, password },
}: PayloadAction<{
 login: string;
 email: string;
 password: string;
}>): Generator<any, void, any> {
 try {
  const newUser = yield call(userRegistration, login, email, password);
  yield put(addNewUserRequest(newUser));
 } catch (error: any) {
  yield put(addNewUserFailure(error.message));
 }
}
