import {FEEDBACK_LOADING, SET_FEEDBACK_COUNT} from "../../utils/constants/action";
import {feedbackApi} from "../../utils/api";
import {reset} from "redux-form";

export const feedbackLoading = status => ({type: FEEDBACK_LOADING, status});
export const setFeedbackCount = data => ({type: SET_FEEDBACK_COUNT, data})


export const addFeedbackRequest = formData =>
  async (dispatch) => {
	feedbackApi.add(formData);
	dispatch(reset('feedback'));
  };
export const setFeedbackCountRequest = () => async (dispatch) => {
  const data = await feedbackApi.get();
  dispatch(setFeedbackCount(data))
}