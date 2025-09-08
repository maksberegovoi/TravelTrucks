import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectCampers } from "./campersSlice.js";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    equipment: [],
    type: [],
  },
  reducers: {
    changeFilterEquipment: (state, action) => {
      console.log(action.payload);
      state.equipment = action.payload;
    },
    changeFilterType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const selectFilterEquipment = state => state.filters.equipment;
export const selectFilterType = state => state.filters.type;
export const { changeFilterEquipment, changeFilterType } = filtersSlice.actions;

export const selectFilterCampers = createSelector(
  [selectCampers, selectFilterEquipment, selectFilterType],
  (campers, equipmentFilter, typeFilter) => {
    if (equipmentFilter.length === 0 && typeFilter.length === 0) {
      return campers;
    }
    return campers.filter(camper => {
      if (typeFilter.length > 0 && !typeFilter.includes(camper.form)) {
        return false;
      }
      if (equipmentFilter.length > 0) {
        return equipmentFilter.some(equipment => camper[equipment] === true);
      }

      return true;
    });
  }
);

export default filtersSlice.reducer;
