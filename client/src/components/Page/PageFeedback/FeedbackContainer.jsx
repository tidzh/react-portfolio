import {feedbackInputCreator, feedbackSendCreator} from "../../../redux/feedback-reducer";
import Feedback from "./Feedback";
import {connect} from "react-redux";

const mapStateToProps = props => {
  return {
	newFeedback: props.feedbackPage.newFeedback
  }
};
const mapDispatchToProps = dispatch => {
  return {
	inputChange: (name, value) => {
	  dispatch(feedbackInputCreator(name, value));
	},
	submitForm: () => {
	  dispatch(feedbackSendCreator());
	}
  }
}


const FeedbackContainer = connect(mapStateToProps, mapDispatchToProps)(Feedback);
export default FeedbackContainer;