import React from "react";
import {addFeedback} from "../../../redux/feedback-reducer";
import Feedback from "./Feedback";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";

class FeedbackContainer extends React.Component {
  state = {
    formLoading: false
  }
  
  onSubmit = formData => {
	this.setState({formLoading: true})
	this.props.addFeedback(formData.subject, formData.name, formData.email, formData.text);
	// this.setState({formLoading: false})
  }
  
  render() {
	return <Feedback {...this.props} onSubmit={this.onSubmit} formLoading={this.state.formLoading}/>
  }
}



export default compose(
  connect(null, {addFeedback}),
  reduxForm({
	form: 'feedback',
  })
)(FeedbackContainer)