import { takeEvery } from "redux-saga/effects";
import { getMyPlaylist } from "../../api/getMyPlaylist";
import * as actions from "../../constants/actions/actions";
import { createAction } from "@reduxjs/toolkit";

export function* sagaWatcher(): Generator<any, void, any> {
 yield takeEvery(actions.GET_ALL_PLAYLISTS, getMyPlaylist);
}

export const getAllPlaylists = createAction(actions.GET_ALL_PLAYLISTS); // we create action which saga can dispatch(for less code)
