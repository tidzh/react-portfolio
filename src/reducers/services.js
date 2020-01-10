import {CLEAR_SERVICE_SINGLE, SET_SERVICE_SINGLE, SET_SERVICES} from "../constants/action";

const initialState = {
  services: [],
  serviceSingle: null
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_SERVICES:
	  return {...state, services: action.services};
	case SET_SERVICE_SINGLE:
	  return {...state, serviceSingle: action.data};
	case CLEAR_SERVICE_SINGLE:
	  return {...state, serviceSingle: null};
	default:
	  return state
  }
};

export default servicesReducer