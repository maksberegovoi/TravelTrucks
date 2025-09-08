import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./campersOps.jsx";

const pendingHandler = state => {
  state.loading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    itemById: [],
    favourites: [],
    loading: false,
    error: null,
  },
  reducers: {
    addFavourite: (state, action) => {
      console.log(action.payload, "payload");
      state.favourites = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCampers.pending, pendingHandler);
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCampers.rejected, rejectedHandler);

    builder.addCase(fetchCamperById.pending, pendingHandler);
    builder.addCase(fetchCamperById.fulfilled, (state, action) => {
      console.log(action.payload);
      state.itemById = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCamperById.rejected, rejectedHandler);
  },
});

export const selectCampers = state => state.campers.items;
export const selectCampersLoading = state => state.campers.loading;
export const selectCampersError = state => state.campers.error;
export const selectCamperById = state => state.campers.itemById;
export const selectCamperFavourites = state => state.campers.favourites;
export const { addFavourite } = campersSlice.actions;

export default campersSlice.reducer;
