import {loginAPI} from "../helpers/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA',
      IS_AUTH_USER = 'IS_AUTH_USER';

const initialState = {
  email: '',
  name: '',
  password: '',
  ava:''
  // isAuth:false,
}


const authReducer = (state=initialState, action) => {
  switch (action.type) {
	  case SET_USER_DATA:
	  return {...state, email:'', password:'', isAuth:true}
	case IS_AUTH_USER:
	  return {...state, email: action.email, name: action.name, ava: action.ava, isAuth:action.flag}
	default:
	  return state;
  }
}


export const setAuthUserData = () => ({type: SET_USER_DATA}),
              isAuthUser = (flag, email, name, ava) => ({type:IS_AUTH_USER, flag, email, name, ava});

export const checkToken = () => {
  return (dispatch) => {
	loginAPI.checkToken().then(data => {
	  if (data.resultCode === true) {
		dispatch(isAuthUser(true, data.email, data.name, data.ava));
	  } else {
		dispatch(isAuthUser(false));
	  }
	}).catch(err => {
	  console.error(err);
	  dispatch(isAuthUser(false));
	});
  }
}
export const authUser = (email, password) => {
  return (dispatch) => {
	loginAPI.checkLogin(email, password)
	  .then(response => {
		if (response.status === 200) {
		  dispatch(setAuthUserData())
		}
	  }).catch(err => {
	    console.error(err.response)
	  dispatch(stopSubmit('auth', {email:'Ошибка', password:'Ошибка', _error: err.response.data.error}))
	});
  }
}
export const logout = () => {
  return (dispatch) => {
	loginAPI.logout().then(data => {
	  dispatch(isAuthUser(false));
	})
  }
}

export default authReducer;