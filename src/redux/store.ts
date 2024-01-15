// import { Tuple, configureStore } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tab from "./currentTab";

// // import reducer from './reducers'
// // import mySaga from './sagas'

// // создаем мидлвар saga
// const sagaMiddleware = createSagaMiddleware();
// // монтируем его в хранилище
// const store = configureStore({
//  reducer: {},//here is my playlists
// //  middleware: () => new Tuple(applyMiddleware(sagaMiddleware)),
// });

// // const store = configureStore({
// //     reducer: rootReducer,
// //     middleware: () => applyMiddleware(sagaMiddleware),
// //   })

// // затем запускаем saga
// // sagaMiddleware.run(mySaga);

// // отрисовываем приложение

// export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
 reducer: tab,
 devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
