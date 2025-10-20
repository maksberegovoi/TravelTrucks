import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./campersOps.jsx";

const pendingHandler = state => {
  state.loading = true;
  state.error = null;
};

const rejectedHandler = state => {
  state.loading = false;
  state.error = true;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    itemById: [],
    totalItems: 0,
    currentPage: 1,
    itemsPerPage: 8,
    loading: false,
    error: null,
  },
  reducers: {
    loadMore: state => {
      state.currentPage += 1;
    },
    resetPagination: state => {
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCampers.pending, pendingHandler);
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.totalItems = action.payload.total;
      state.loading = false;
    });
    builder.addCase(fetchCampers.rejected, rejectedHandler);
    //////////////////////////////////////////////////////////////////
    builder.addCase(fetchCamperById.pending, pendingHandler);
    builder.addCase(fetchCamperById.fulfilled, (state, action) => {
      state.itemById = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCamperById.rejected, rejectedHandler);
    //////////////////////////////////////////////////////////////////
  },
});

export const { loadMore, resetPagination } = campersSlice.actions;
export default campersSlice.reducer;
