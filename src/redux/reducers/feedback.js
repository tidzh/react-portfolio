import {FEEDBACK_LOADING} from "../../utils/constants/action";


const initialState = {
	feedbackArchive: null,
    loading:false
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
	case FEEDBACK_LOADING:
	  return  {
	    ...state,
		loading: action.status
		};
	default:
	  return state;
  }
};

export default feedbackReducer;