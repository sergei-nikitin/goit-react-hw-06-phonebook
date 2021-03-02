import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phoneBookReducer from "./pb-reducer";

const midleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    phoneBook: persistReducer(contactsPersistConfig, phoneBookReducer),
  },
  midleware,
  decTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const storePersistor = { store, persistor };

export default storePersistor;
