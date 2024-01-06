// redux toolkit createApies is middleware in

import { rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { menusApi } from "@/features/menu/redux/api";

const middleware = [menusApi.middleware];

export default (initalState?: Record<string, unknown>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initalState,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
    devTools: true,
  });

  return store;
};
