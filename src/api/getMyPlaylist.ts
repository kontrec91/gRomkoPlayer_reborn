import { call, put } from "redux-saga/effects";
import { api } from "../utils/api";
import { getAllPlaylists } from "../redux/allPlaylists";

export function* getMyPlaylist(): Generator<any, void, any> {
 try {
  const res = yield call(api.get, "/track.json");

  console.log("res", res);
  yield put(getAllPlaylists(res.data)); //send the received data to redux-toolkit reducer, update state
 } catch (error) {
  console.error("Failed to fetch playlists:", error);
  throw new Error();
 }
}
