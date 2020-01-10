import {IS_AUTH_USER, SET_USER_DATA} from "../../utils/constants/action";
import {loginAPI} from "../../utils/api";
import {stopSubmit} from "redux-form";

export const setAuthUserData = () => ({type: SET_USER_DATA});
export const isAuthUser = (flag, email, name, ava) => ({type: IS_AUTH_USER, flag, email, name, ava});

export const checkToken = () => (dispatch) => {
  return loginAPI.checkToken().then(data => {
	if (data.resultCode === true) {
	  dispatch(isAuthUser(true, data.email, data.name, data.ava));
	} else {
	  dispatch(isAuthUser(false));
	}
  }).catch(err => {
	console.error(err);
	dispatch(isAuthUser(false));
  });
};
export const authUser = formData => dispatch => {
	loginAPI.checkLogin(formData)
	  .then(response => {
		if (response.status === 200) {
		  dispatch(setAuthUserData())
		}
	  }).catch(err => {
	  console.error(err.response);
	  dispatch(stopSubmit('auth', {email: 'Ошибка', password: 'Ошибка', _error: err.response.data.error}))
	});
  }
;
export const logout = () => (dispatch) => {
  loginAPI.logout().then(data => {
	dispatch(isAuthUser(false));
  })
};