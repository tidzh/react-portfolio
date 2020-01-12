import {SET_SKILLS, SET_REVIEWS} from "../../utils/constants/action";
import {reviewsAPI, skillsApi} from "../../utils/api";

export const setSkills = data => ({type: SET_SKILLS, data});
export const setReviews = data => ({type: SET_REVIEWS, data});

export const setSkillsRequest = () =>
  async (dispatch) => {
	const data = await skillsApi.get();
	dispatch(setSkills(data))
  };
export const setReviewsRequest = () =>
  async (dispatch) => {
	const data = await reviewsAPI.get();
	dispatch(setReviews(data))
  };