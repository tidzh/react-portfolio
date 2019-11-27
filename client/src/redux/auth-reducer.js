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
              isAuthUser = flag => ({type:IS_AUTH_USER, flag})

export default authReducer;