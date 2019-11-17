const FEEDBACK_UPDATE = 'FEEDBACK_UPDATE',
      FEEDBACK_SEND  = 'FEEDBACK_SEND';

const initialState = {
	feedbackArchive: [{
	}],
	newFeedback: {
    text:''
}
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
	case FEEDBACK_UPDATE:
	  return  {
	    ...state,
		newFeedback: {...state.newFeedback[action.name] = action.value}
		};
	case FEEDBACK_SEND:
	  return {...state, newFeedback:{text: ''}};
	default:
	  return state;
  
  }
}

export const feedbackInputCreator = (name, value) => ({type: FEEDBACK_UPDATE, name:name, value:value}),
             feedbackSendCreator = () => ({type: FEEDBACK_SEND});

export default feedbackReducer;