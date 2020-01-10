import {FEEDBACK_LOADING, SET_FEEDBACK_COUNT} from "../../utils/constants/action";
import {feedbackApi} from "../../utils/api";
import {reset} from "redux-form";

export const feedbackLoading = status => ({type: FEEDBACK_LOADING, status});
export const setFeedbackCount = data => ({type: SET_FEEDBACK_COUNT, data})


export const addFeedbackRequest = (subject, name, email, text) => {
  return (dispatch) => {
	feedbackApi.add(subject, name, email, text).then(data => {
	  dispatch(reset('feedback'));
	})
  }
};
export const setFeedbackCountRequest = count => (dispatch) => {
  feedbackApi.get().then(data => {
	dispatch(setFeedbackCount(data))
  });
}