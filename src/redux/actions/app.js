import {INITIALIZATION_SUCCESS} from "../../constants/action";
import {checkToken} from "./auth";

export const initializedSuccess = () => ({type: INITIALIZATION_SUCCESS});

export const initializeApp = () => {
  return (dispatch) => {
	let checkTokenPromise = dispatch(checkToken());
	Promise.all([checkTokenPromise]).then(() => {
	  dispatch(initializedSuccess()) // Наше приложение проинициализировалось, все ОК.
	})
  }
};