import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./reducers/campers/campersSlice.js";
import filtersReducer from "./reducers/filters/filtersSlice.js";
import favouritesReducer from "./reducers/favourites/favouritesSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favourites: favouritesReducer,
  },
});
