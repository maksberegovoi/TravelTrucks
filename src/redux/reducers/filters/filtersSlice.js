import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    equipment: [],
    type: [],
    location: "",
  },
  reducers: {
    changeFilterEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    changeFilterType: (state, action) => {
      state.type = action.payload;
    },
    changeFilterLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { changeFilterEquipment, changeFilterType, changeFilterLocation } =
  filtersSlice.actions;

export default filtersSlice.reducer;
