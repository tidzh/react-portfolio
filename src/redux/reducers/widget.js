import {SET_REVIEWS, SET_SKILLS} from "../../constants/action";

const initialState = {
  skills: {
    lists: [],
	isFetching:true
  },
  reviews: {
	lists: [],
	isFetching:true
  }
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_SKILLS:
	  return {...state, skills: {lists: action.data, isFetching:action.isFetching}};
	case SET_REVIEWS:
	  return {...state, reviews: {lists: action.data, isFetching:action.isFetching}};
	default:
	  return state;
  }
};

export default widgetReducer;