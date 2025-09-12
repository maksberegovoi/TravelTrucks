import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
