import { takeLatest } from "redux-saga/effects";
import { getMyPlaylist } from "../../api/getMyPlaylist";
import * as actions from "../../constants/actions/actions";

import { handleLogin } from "./handleLogin";
import {
 createUserRequest,
 logInUserRequest,
 logoutUser,
} from "../../constants/actions/actions";
import { handleRegistration } from "./handleRegistration";
import { handleLogout } from "./handleLogout";

export function* sagaWatcher(): Generator<any, void, any> {
 yield takeLatest(actions.GET_ALL_PLAYLISTS, getMyPlaylist);
 yield takeLatest(logInUserRequest.type, handleLogin);
 yield takeLatest(createUserRequest.type, handleRegistration);
 yield takeLatest(logoutUser.type, handleLogout);
}
