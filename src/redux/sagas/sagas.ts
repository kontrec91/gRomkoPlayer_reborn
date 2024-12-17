import { takeLatest } from "redux-saga/effects";
import { getMyPlaylist } from "../../api/getMyPlaylist";
import * as actions from "../../constants/actions/actions";
import { addUser } from "../../api/createUser";
import { userLogin } from "../../api/loginUser";
// import { addNewUser } from "../setNewUser";
// import { getAllPlaylists } from "../allPlaylists";
import { createNewUser, loginUser } from "../../constants/actions/actions";

import { handleLogin } from "./authSaga";

export function* sagaWatcher(): Generator<any, void, any> {
 yield takeLatest(actions.GET_ALL_PLAYLISTS, getMyPlaylist);
 //  yield takeLatest(actions.CREATE_USER, addUser);
 yield takeLatest(createNewUser.type, addUser);
 //  yield takeLatest(actions.USER_LOGIN, userLogin);
 //  yield takeLatest("existingUser/signInUserRequest", userLogin);
 //  yield takeLatest(loginUser.type, userLogin);
 yield takeLatest(loginUser.type, handleLogin);
}
