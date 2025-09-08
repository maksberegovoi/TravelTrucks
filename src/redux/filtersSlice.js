import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectCampers, selectCurrentPage, selectItemsPerPage } from "./campersSlice.js";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    equipment: [],
    type: [],
  },
  reducers: {
    changeFilterEquipment: (state, action) => {
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
        return equipmentFilter.every(equipment => camper[equipment] === true);
      }

      return true;
    });
  }
);

export const selectPaginatedCampers = createSelector(
  [selectFilterCampers, selectCurrentPage, selectItemsPerPage],
  (filteredCampers, currentPage, itemsPerPage) => {
    const endIndex = currentPage * itemsPerPage;
    return filteredCampers.slice(0, endIndex);
  }
);

export const selectHasMoreCampers = createSelector(
  [selectFilterCampers, selectCurrentPage, selectItemsPerPage],
  (filteredCampers, currentPage, itemsPerPage) => {
    const endIndex = currentPage * itemsPerPage;
    return endIndex < filteredCampers.length;
  }
);

export default filtersSlice.reducer;
