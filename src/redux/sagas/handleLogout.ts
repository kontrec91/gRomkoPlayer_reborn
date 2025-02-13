import { call, put } from "redux-saga/effects";
import { tokenManager } from "../../utils/tokenManager";
import { logoutUserSuccess, logoutUserFailure } from "../authSlice";
import { logoutUser } from "../../api/logoutUser";

export function* handleLogout(): Generator<any, void, any> {
 try {
  const token = tokenManager.getRefreshToken() as string;
  yield call(logoutUser, token);
  yield tokenManager.removeRefreshToken();
  yield put(logoutUserSuccess());
 } catch (error: any) {
  yield put(logoutUserFailure(error.message));
 }
}
