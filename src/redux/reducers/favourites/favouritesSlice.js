import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favourites = action.payload;
    },
  },
});

export const { addFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
