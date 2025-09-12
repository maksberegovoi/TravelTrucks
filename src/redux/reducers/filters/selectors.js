import { createSelector } from "@reduxjs/toolkit";
import {
  selectCampers,
  selectCurrentPage,
  selectItemsPerPage,
} from "../campers/selectors.js";

export const selectFilterEquipment = state => state.filters.equipment;
export const selectFilterType = state => state.filters.type;
export const selectFilterLocation = state => state.filters.location;

export const selectFilterCampers = createSelector(
  [selectCampers, selectFilterEquipment, selectFilterType, selectFilterLocation],
  (campers, equipmentFilter, typeFilter, locationFilter) => {
    return campers.filter(camper => {
      if (
        locationFilter &&
        !camper.location.toLowerCase().includes(locationFilter.toLowerCase())
      ) {
        return false;
      }

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

export const selectUniqueLocations = createSelector([selectCampers], campers => {
  const locations = campers.map(camper => camper.location);
  return [...new Set(locations)];
});

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
