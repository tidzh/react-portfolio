import {servicesApi} from "../helpers/api";
import {SET_SERVICES, SET_SERVICE_SINGLE, UPDATE_SERVICE_SINGLE, CLEAR_SERVICE_SINGLE} from "../constants/action";

export const setServices = services => ({type: SET_SERVICES, services});
export const setServiceSingle = data => ({type: SET_SERVICE_SINGLE, data});
export const updateServiceSingle = data => ({type: UPDATE_SERVICE_SINGLE, data});
export const clearServiceSingle = () => ({type: CLEAR_SERVICE_SINGLE})

export const setServicesRequest = () => {
  return (dispatch) => {
	servicesApi.get().then(data => {
	  dispatch(setServices(data));
	})
  }
};
export const setServiceSingleRequest = data => {
  return (dispatch) => {
	servicesApi.getSingle(data).then(data => {
	  dispatch(setServiceSingle(data));
	})
  }
};
export const updateServiceSingleRequest = data => {
  return (dispatch) => {
	servicesApi.updateSingle(data).then(data => {
	  dispatch(updateServiceSingle(data));
	})
  }
};