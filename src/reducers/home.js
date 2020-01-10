import {SET_SKILLS} from "../constants/action";

const initialState = {
  skills: []
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_SKILLS:
	  return {...state, skills:action.data};
	default:
	  return state;
  }
}

export default homeReducer;