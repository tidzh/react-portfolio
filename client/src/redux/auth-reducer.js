const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  email: null,
  login: null,
  isAuth:false
}


const authReducer = (state=initialState, action) => {
  switch (action.type) {
	case SET_USER_DATA:
	  return {...state, ...action.data, isAuth:true}
	default:
	  return state;
  }
}


export  const setAuthUserData = (email, login) => ({type:SET_USER_DATA, data:{email, login}})

export default authReducer;