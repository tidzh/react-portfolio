import {INITIALIZATION_SUCCESS} from "../../utils/constants/action";

const initialState = {
  initialize: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
	case INITIALIZATION_SUCCESS:
	  return {...state, initialize: true};
	default:
	  return state
  }
};

export default appReducer;

