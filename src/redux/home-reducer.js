import {skillsApi} from "../helpers/api";

const SET_SKILLS ='SET_SKILLS'

const initialState = {
  skills: []
}

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_SKILLS:
	  return {...state, skills:action.data}
	default:
	  return state;
  }
}
export const setSkills = (data) => ({type:SET_SKILLS, data});

export const getSkills = () => {
  return (dispatch) => {
	skillsApi.get().then(data => {
	  dispatch(setSkills(data))
	})
  }
}

export default HomeReducer;