import {IS_AUTH_USER} from "../../constants/action";
import {loginAPI} from "../../utils/api";
import {stopSubmit} from "redux-form";

export const isAuthUser = (flag, email, name, ava) => ({type: IS_AUTH_USER, flag, email, name, ava});


export const checkToken = () => async (dispatch) => {
  const data = await loginAPI.checkToken();
  if (data.resultCode === true) {
	dispatch(isAuthUser(true, data.email, data.name, data.ava));
  } else {
	dispatch(isAuthUser(false));
  }
};

export const authUser = formData => async (dispatch) => {
  try {
	const response = await loginAPI.checkLogin(formData);
	if (response.status === 200) {
	  dispatch(checkToken())
	}
  } catch (err) {
	dispatch(stopSubmit('auth', {email: 'Ошибка', password: 'Ошибка', _error: err.response.data.error}));
	console.error(err.response);
  }
};


export const logout = () => async (dispatch) => {
  const statusText = await loginAPI.logout();
  if (statusText === 'OK') {
	dispatch(isAuthUser(false));
  }
};