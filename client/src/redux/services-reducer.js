import {servicesApi} from "../api/api";

const SET_SERVICES = 'SET_SERVICES';

const initialState = {
  services: [],
}

const ServicesReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_SERVICES:
	  return {...state, services: action.services}
	default:
	  return state
  }
}
export const setServicesAction = (services) => ({type: SET_SERVICES, services});

export const setServices = () => {
  return (dispatch) => {
	servicesApi.getServices().then(data => {
	  dispatch(setServicesAction(data));
	})
  }
}

export default ServicesReducer