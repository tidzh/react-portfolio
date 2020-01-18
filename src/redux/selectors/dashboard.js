import {createSelector} from "reselect";

export const getUserName = state => state.auth.name;
export const getUserEmail = state => state.auth.email;
export const getUserAva = state => state.auth.ava;
export const getFeedback = state => state.dashboard.feedback;

export const feedbackCount = createSelector(getFeedback, count => {
  let countFilter = count.filter(el => el.status === false);
  return countFilter.length
});