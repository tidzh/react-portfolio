import {feedbackInputCreator, feedbackSendCreator} from "../../../redux/feedback-reducer";
import Feedback from "./Feedback";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";

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



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
	form: 'feedback',
  })
)(Feedback)