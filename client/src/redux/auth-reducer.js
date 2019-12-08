import {loginAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
      SET_USER_INPUT = 'SET_USER_INPUT',
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
	case SET_USER_INPUT:
	  return {...state, ...action.value}
	  case SET_USER_DATA:
	  return {...state, email:'', password:'', isAuth:true}
	case IS_AUTH_USER:
	  return {...state, email: action.email, name: action.name, ava: action.ava, isAuth:action.flag}
	default:
	  return state;
  }
}


export  const setAuthUserData = () => ({type: SET_USER_DATA}),
              setAuthUserInput = value => ({type:SET_USER_INPUT, value}),
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
export const authUser = (email, password, validationUserData) => {
  return (dispatch) => {
	loginAPI.checkLogin(email, password)
	  .then(status => {
		if (status === 200) {
		  dispatch(setAuthUserData())
		} else {
		  const error = new Error(status.error);
		  throw error;
		}
	  }).catch(err => {
	  console.error(err);
	  validationUserData();
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