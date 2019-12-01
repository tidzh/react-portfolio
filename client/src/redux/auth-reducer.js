import {loginAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
      SET_USER_INPUT = 'SET_USER_INPUT',
      IS_AUTH_USER = 'IS_AUTH_USER';

const initialState = {
  email: '',
  password: '',
  isAuth:false
}


const authReducer = (state=initialState, action) => {
  switch (action.type) {
	case SET_USER_INPUT:
	  return {...state, ...action.value}
	  case SET_USER_DATA:
	  return {...state, isAuth:true}
	case IS_AUTH_USER:
	  return {...state, isAuth:action.flag}
	default:
	  return state;
  }
}


export  const setAuthUserData = () => ({type: SET_USER_DATA}),
              setAuthUserInput = value => ({type:SET_USER_INPUT, value}),
              isAuthUser = flag => ({type:IS_AUTH_USER, flag});

export const checkToken = () => {
  return (dispatch) => {
	loginAPI.checkToken().then(status => {
	  if (status === 200) {
		dispatch(isAuthUser(true));
	  }
	}).catch(err => {
	  console.error(err);
	  dispatch(isAuthUser(false));
	});
  }
}
export const authUser = (email, password) => {
  return (dispatch, setState) => {
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
	  // this.setState({error: true})
	});
  }
}

export default authReducer;