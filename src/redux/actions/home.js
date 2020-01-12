import {SET_SKILLS, SET_REVIEWS} from "../../utils/constants/action";
import {reviewsAPI, skillsApi} from "../../utils/api";

export const setSkills = data => ({type:SET_SKILLS, data});
export const setReviews = data => ({type:SET_REVIEWS, data});

export const setSkillsRequest = () => {
  return (dispatch) => {
	skillsApi.get().then(data => {
	  dispatch(setSkills(data))
	})
  }
};
export const setReviewsRequest = () => {
  return (dispatch) => {
	reviewsAPI.get().then(data => {
	  dispatch(setReviews(data))
	})
  }
};