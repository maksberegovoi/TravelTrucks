import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice.js";
import filtersReducer from "./filtersSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});
