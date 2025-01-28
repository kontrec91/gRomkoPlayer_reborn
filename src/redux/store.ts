import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tab from "./currentTab";
import setAllPlaylists from "./allPlaylists";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas/sagas";
// import addNewUserReducer from "./setNewUser";
// import loginUserReducer from "./setLoginUser";
// import { logoutUser } from "../constants/actions/actions";
import authSlice from "./authSlice";
const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
 tab,
 allPlaylists: setAllPlaylists,
 //  user: addNewUserReducer,
 //  authUser: loginUserReducer,
 authUser: authSlice, //login and registration
});

// const rootReducer = (
//  state: RootState,
//  action: { type: string; payload: any }
// ) => {
//  if (action.type === logoutUser.type) {
//   state = {};
//  }
//  //  return combineReducers(state, action);
//  return combinedReducers(state, action);
// };

export const store: any = configureStore({
 reducer: combinedReducers,
 //  {
 //   tab,
 //   allPlaylists: setAllPlaylists,
 //   user: addNewUserReducer,
 //   authUser: loginUserReducer,
 //  },
 devTools: true,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), //disable thunk, allow saga
});

sagaMiddleware.run(sagaWatcher);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
