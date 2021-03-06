import { createSelector } from "reselect";

export const getServices = state => state.services.services.lists;
export const getServicesFetching = state => state.services.services.isFetching;

export const getServiceSingle = state => state.services.serviceSingle;

export const getSidebar = createSelector(getServices, item => {
  return item.map(el => ({ name: el.name, url: el.url }));
});
