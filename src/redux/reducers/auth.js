import {IS_AUTH_USER, SET_USER_DATA} from "../../constants/action";

const initialState = {
  email: '',
  name: '',
  password: '',
  ava:''
};


const authReducer = (state=initialState, action) => {
  switch (action.type) {
	  case SET_USER_DATA:
	  return {...state, email:'', password:'', isAuth:true};
	case IS_AUTH_USER:
	  return {...state, email: action.email, name: action.name, ava: action.ava, isAuth:action.flag};
	default:
	  return state;
  }
};

export default authReducer;