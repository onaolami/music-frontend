import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
};

const allReducers = combineReducers({ auth: authReducer });

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
