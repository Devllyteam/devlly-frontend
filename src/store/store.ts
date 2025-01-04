import { configureStore } from "@reduxjs/toolkit";
import { api, apiReducer } from "./apislice";

export const store = configureStore({
  reducer: {
    apiState: apiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

