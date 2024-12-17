import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tab from "./currentTab";
import setAllPlaylists from "./allPlaylists";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas/sagas";
import addNewUserReducer from "./setNewUser";
import loginUserReducer from "./setLoginUser";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
 reducer: {
  tab,
  allPlaylists: setAllPlaylists,
  user: addNewUserReducer,
  authUser: loginUserReducer,
 },
 devTools: true,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), //disable thunk, allow saga
});

sagaMiddleware.run(sagaWatcher);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
