import {SET_REVIEWS, SET_SKILLS} from "../../utils/constants/action";

const initialState = {
  skills: [],
  reviews: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_SKILLS:
	  return {...state, skills: action.data};
	case SET_REVIEWS:
	  return {...state, reviews: action.data};
	default:
	  return state;
  }
}

export default homeReducer;