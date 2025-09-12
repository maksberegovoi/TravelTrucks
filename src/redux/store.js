import { combineReducers, configureStore } from "@reduxjs/toolkit";
import campersReducer from "./reducers/campers/campersSlice.js";
import filtersReducer from "./reducers/filters/filtersSlice.js";
import favouritesReducer from "./reducers/favourites/favouritesSlice.js";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedFavouritesReducer = persistReducer(
  {
    key: "favourites",
    storage,
    whitelist: ["itemsId"],
  },
  favouritesReducer
);

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favourites: persistedFavouritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
