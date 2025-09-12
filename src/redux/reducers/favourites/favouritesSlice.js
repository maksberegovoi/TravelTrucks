import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    itemsId: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      if (state.itemsId.includes(action.payload)) {
        state.itemsId = state.itemsId.filter(id => id !== action.payload);
      } else {
        state.itemsId.push(action.payload);
      }
    },
  },
});

export const { addFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
