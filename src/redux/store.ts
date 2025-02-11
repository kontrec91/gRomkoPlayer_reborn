import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tab from "./currentTab";
import setAllPlaylists from "./allPlaylists";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas/sagas";
import authSlice from "./authSlice";
const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
 tab,
 allPlaylists: setAllPlaylists,
 authUser: authSlice, //login and registration
});


export const store: any = configureStore({
 reducer: combinedReducers,
 devTools: true,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), //disable thunk, allow saga
});

sagaMiddleware.run(sagaWatcher);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
