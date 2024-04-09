import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tab from "./currentTab";
import allPlaylists from "./allPlaylists";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
 reducer: { tab, allPlaylists },
 devTools: true,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), //disable thunk, allow saga
});

sagaMiddleware.run(sagaWatcher);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
