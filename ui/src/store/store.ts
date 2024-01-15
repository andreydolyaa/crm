import { configureStore, Middleware } from "@reduxjs/toolkit";
import createWebsocketMiddleware from "./middleware/websocketMiddleware";
import agentsSlice from "../features/agents/agentsSlice";

const middleware: Middleware[] = [createWebsocketMiddleware()];

const store = configureStore({
  reducer: {
    agents: agentsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
