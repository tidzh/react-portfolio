import {feedbackApi} from "../api/api";
import {reset} from 'redux-form';

const FEEDBACK_LOADING = 'FEEDBACK_LOADING';

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
}

export const feedbackLoading = (status) => ({type: FEEDBACK_LOADING, status});


export const addFeedback = (subject, name, email, text) => {
  return (dispatch) => {
	feedbackApi.add(subject, name, email, text).then(data => {
	  dispatch(reset('feedback'));
	})
  }
}

export default feedbackReducer;