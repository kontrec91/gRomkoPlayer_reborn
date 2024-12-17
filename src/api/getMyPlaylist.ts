import { call, put } from "redux-saga/effects";
import { api } from "../utils/api";
import { getAllPlaylists } from "../redux/allPlaylists";

// export const getMyPlaylist = () => {
//  api.get("/track.json").then((res) => res.data);
// };

export function* getMyPlaylist(): Generator<any, void, any> {
 try {
  const res = yield call(api.get, "/track.json");
  //   console.log(
  //    "NEW DATA",
  //    {
  //     ...res.data,
  //     subRows: res.data.map(item=> item)
  //    }
  // ...newPerson(),
  // subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
  //   );

  console.log("res", res);
  yield put(getAllPlaylists(res.data)); //send the received data to redux-toolkit reducer, update state
 } catch (error) {
  // Обработка ошибок
  console.error("Failed to fetch playlists:", error);
  throw new Error();
 }
}
