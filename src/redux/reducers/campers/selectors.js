export const selectCampers = state => state.campers.items;
export const selectCampersLoading = state => state.campers.loading;
export const selectCampersError = state => state.campers.error;
export const selectCamperById = state => state.campers.itemById;
export const selectCampersTotalItems = state => state.campers.totalItems;
export const selectCurrentPage = state => state.campers.currentPage;
export const selectItemsPerPage = state => state.campers.itemsPerPage;
