import { call, put } from "redux-saga/effects";
import { api } from "../utils/api";
import { setAllPlaylists } from "../redux/allPlaylists";

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

  yield put(setAllPlaylists(res.data)); // Отправляем полученные данные в редуктор
 } catch (error) {
  // Обработка ошибок
 }
}
