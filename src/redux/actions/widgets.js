import {SET_SKILLS, SET_REVIEWS} from "../../constants/action";
import {reviewsAPI, skillsApi} from "../../utils/api";

export const setSkills = (data, isFetching) => ({type: SET_SKILLS, data, isFetching});
export const setReviews = (data, isFetching) => ({type: SET_REVIEWS, data, isFetching});

export const setSkillsRequest = () =>
  async (dispatch) => {
	const data = await skillsApi.get();
	dispatch(setSkills(data, false))
  };
export const setReviewsRequest = () =>
  async (dispatch) => {
	const data = await reviewsAPI.get();
	dispatch(setReviews(data, false))
  };